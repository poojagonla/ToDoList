
import express from "express";
import bodyParser from "body-parser";

const app=express();

app.use(bodyParser.urlencoded({extended: true}));

app.listen(3000,()=>
{
    console.log("Starting Server..");
    console.log("Please Wait..We are Starting Server..");
    console.log("Server Started.....");
})

var listTodo=[]; 
app.get("/",(req,res)=>{listTodo=[];
res.render("index.ejs");
})


app.post("/submit",(req,res)=>{
  listTodo.push(req.body["testing"]);
   // console.log(adding);
    res.render("index.ejs",{Add: listTodo});
}
)