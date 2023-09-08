const express =  require("express");
const dotenv = require("dotenv").config();
const expressLayouts = require("express-ejs-layouts");
const connectDb = require("./backend/config/dbConnection");
const session = require("express-session")
const flash = require("express-flash");

connectDb();
const app = express();


const port = process.env.PORT || 4200; 
 
 
app.set('view engine', 'ejs');
app.set('views','frontend');
 
app.use(express.urlencoded({ extended: true }))
app.use(express.json()); 
app.use(expressLayouts);
app.use(session({
    secret: 'secret', 
    cookie : {maxAge: 60000},
    resave: false,
    saveUninitialized:true
}));
app.use(flash());
app.set('layout','includes/layout');  

//teacher and student routes
app.use("/api/teacher",require("./backend/routes/teacherRoutes"));
app.use("/api/student",require("./backend/routes/studentRoutes"));

app.get('/',(req,res)=>{ 
    res.render('home');  
});
  
app.listen(port,()=>{
    console.log(`Server running on port http://localhost:${port}`);
}); 