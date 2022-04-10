const express = require('express')
const  bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Welcome to nodeJS server with distroless image')
});

let toDoList = []

app.post('/addToDo', (req, res) => {
    if(req.body.toDo ==''){
        return res.status(400).send({
            success: -1,
            message: `todo can't be empty`
        });
    }
    toDoList.push({
        id: toDoList.length + 1,
        todo: req.body.todo,
    })
    return res.status(201).send({
        success: 0,
        message: `Todo added to the list`,
        toDoList,
    });
})
app.get('/getToDo',(req,res)=>{
    return res.status(200).send({
        success: 0,
        toDoList,
    });
})
app.listen(8000, () => {
    console.log('Example app listening on port 8000!')
});