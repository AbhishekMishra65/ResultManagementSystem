
const Student = require("../models/studentModel")

const getStudentLogin = async (req,res)=>{
    res.render("student/login",{messages: req.flash()});
    // res.status(200).send("student login get worked successfully");
}

const postStudentLogin = async (req,res)=>{
    // res.status(200).send("student login post worked successfully");
    const rollno = req.body.rollno;
    const student = await Student.findOne({rollno:rollno});
    if(student){
      return  res.render("student/result",{student});
    } 
    else{
        req.flash("error","Wrong credentails, Please try again!!!");
        res.redirect("/api/student/login");
    }
}



module.exports = {getStudentLogin,postStudentLogin};