const authRoute = require("express").Router()
const authController = require("../controllers/auth.controller")

authRoute.route("/register").post(authController.register)
authRoute.route("/login").post(authController.login)


module.exports = authRoute;