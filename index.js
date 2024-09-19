const express = require('express');
const connect = require('./connection');
const student = require('./routes/student');
const app = express();
connect();

app.use(express.json());
app.use(student);




//localhost:3000/add/user

app.listen(3000,(err)=>{
    if(err){
        console.log('Error starting server',err);
        
    }else{
        console.log('Server is listening on port 3000');
    }
})


