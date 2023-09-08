const Student = require("../models/studentModel");
const Teacher = require("../models/teacherModel");
const jwt = require("jsonwebtoken");

const getTeacherLogin = async (req,res)=>{
    res.render("teacher/login" ,{messages : req.flash()});
}

const postTeacherLogin = async (req,res)=>{
    const {email, password} = req.body;
    // const teacher = await Teacher.findOne({ email });
    if(email=="teacher@gmail.com" && password== "teacher"){
        // const accessToken = jwt.sign(
        //     {
        //         teacher:{
        //         email: teacher.email
        //        }
        //       },
        //     process.env.SECRET_KET,
        //     { expiresIn: "1m" }
        //   );
        //   console.log(accessToken);
        res.redirect("/api/teacher/studentList");
    }
    else{
        req.flash("error","Wrong credentails, Please try again!!!");
        res.redirect("/api/teacher/login")
    }
}

const getAddStudent = async (req,res)=>{
    res.render("teacher/addStudent");
}

const postAddStudent = async (req,res)=>{
    const {rollno,name,dob,score} = req.body;
    const studentAvailable = await Student.findOne({rollno});
    if(studentAvailable){
        res.status(400).send("Student already present");
    }
    else{ 
        const student = await Student.create({
            rollno,
            name,
            dob,
            score,
        });
        // res.redirect("/api/teacher/studentList");
        res.render("teacher/addStudent");
    }
}

const studentList = async (req,res)=>{
    const studentList = await Student.find();
    res.render("teacher/studentList",{students:studentList,messages:req.flash()});
}

const getUpdateStudent = async(req,res)=>{
    const student = await Student.findById(req.params.id);
    res.render("teacher/updateStudent",{student});
}
 
const postUpdateStudent = async (req,res)=>{
    const student = await Student.findByIdAndUpdate(req.params.id,req.body)
    req.flash("success","Record updated successfully!!!");
    res.redirect("/api/teacher/studentList");
}

const deleteStudent = async (req,res)=>{
    const student = await Student.findById(req.params.id);
    if(student){
        await Student.findByIdAndDelete(req.params.id);
    }
    else{
        res.send("student not found");
    }
}

module.exports = {getTeacherLogin,postTeacherLogin,studentList,getAddStudent,postAddStudent,getUpdateStudent,postUpdateStudent,deleteStudent};