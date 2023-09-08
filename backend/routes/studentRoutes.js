const express = require("express");
const router = express.Router();
const {getStudentLogin,postStudentLogin} = require("../controllers/studentController");

router.route("/login").get(getStudentLogin).post(postStudentLogin);




module.exports = router;