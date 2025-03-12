const User = require("../models/user.model");

const register = async (req, res, next) => {

    const { name, email, password } = req.body;

    try {
        const newUser = await User.create({name, email, password})

        const userDetails = {
            token: await newUser.generateToken(),
            userId: newUser._id.toString(),
        }

        res.status(201).json({
            success: true,
            message: "Registration Successfully completed.. .",
            userDetails
        })
    } catch (error) {
        next(error)
    }

}

const login = async (req, res, next) => {

    const { email, password } = req.body;

    try {
        const isUserExist = await User.findOne({ email })

        if (!isUserExist) {
            return res.status(400).json({ message: "Please register first" })
        }
        
        
        const isPasswordValid = await isUserExist.comparePassword(password)

        if (!isPasswordValid) {
            return res.status(400).json({
                message: "Invalid email or Password",
            })
        }
 
        const userDetails = {
            token: await isUserExist.generateToken(),
            userId: isUserExist._id.toString(),
        }

        res.status(200).json({
            success: true,
            message: "Logineed successfull.. .",
            userDetails
        })
    } catch (error) {
        next(error)
    }

}


module.exports = { register, login }