const express = require("");
const app = express();
const port= process.env.PORT || 8000;
app.post("/student", (req, res)=>{
    res.send("hello the other side ")
})
app.listen(port,()=>{
    console.log('Connection is setup')
})