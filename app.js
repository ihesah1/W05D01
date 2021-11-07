const { json } = require("express")
const express = require("express")
const app = express()
const port = 3000
app.use(express.json());

const todos = [
{id:1,task:"sleep"},
{id:2, task: "eat"},
{id:3, task: "code"}
]
///////////////////////read
app.get("/todos",(req, res)=>{
res.status(200)
res.json(todos)
});
///////////////////////create

app.post("/create",(req,res)=>{
    const{id,task}= req.body
    //const newTask ={id: req.body.id, task:req.body.task} >> jsx
    todos.push({id,task});

    /////بعرضهم الان 
    res.status(201);
    res.json({id,task})
})
//////update

app.put("/todos/:id/update_task", (req, res) => {
    todos.forEach((todo) => {
      if (todo.id == req.params.id) {
        todo.task = req.body.task;
      }
    });
    res.status(200);
    res.json(todos);
  });
  


////////Delete todos
app.delete("/todos", (req, res) => {
    todos = [];
    res.status(200);
    res.json("All Todos Deleted");
  });
app.listen(port,()=>{
    console.log(`server is running on ${port}`);
});
