const {Router} = require('express');
const router =  Router();
const authController = require('../controllers/auth')
const { checkSchema } = require("express-validator");
const {checkValidity} = require("../middlewares/schemaValidator");
const userRegister = require("../validation/userRgister");
// const userLogin = require("../validation/userLogin");

router.post("/login",
// checkSchema(userLogin),
// checkValidity,
authController.login);


router.post("/register", 
checkSchema(userRegister),
checkValidity,
authController.register);

module.exports=router