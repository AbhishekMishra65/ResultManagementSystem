const express = require("express");
const router = express.Router();
const {getTeacherLogin,postTeacherLogin,studentList,postAddStudent,getAddStudent,getUpdateStudent, postUpdateStudent,deleteStudent} = require("../controllers/teacherController");
const validateToken = require("../middleware/validateTokenHandler");

router.route("/login").get(getTeacherLogin).post(postTeacherLogin);
router.route("/studentList").get(studentList);
// router.get("/studentList", validateToken,studentList)
router.route('/addStudent').get(getAddStudent).post(postAddStudent);
router.route("/updateStudent/:id").get(getUpdateStudent).post(postUpdateStudent);
router.route("/deleteStudent/:id").get(validateToken,deleteStudent);
 


module.exports = router; 