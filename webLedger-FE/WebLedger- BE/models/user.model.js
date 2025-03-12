const mongoose = require("mongoose");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    favourite_recipes : []
})

userSchema.pre("save", async function (next) {
    let user = this;
    try {
        if (!user.isModified("password")) {
            return next()
        }
        const salt_round = await bcrypt.genSalt()
        const hashedPassword = await bcrypt.hash(user.password, salt_round)

        user.password = hashedPassword;
        next()

    } catch (error) {
        next(error)
    }
})


userSchema.methods.generateToken = function () {
    let user = this;
    return jwt.sign(
        {
            userId: user._id.toString(),
            email: user.email
        },
        process.env.SECRET_KEY,
        { expiresIn: "30d" }
    );
};



userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};



const User = mongoose.model("User", userSchema)

module.exports = User;