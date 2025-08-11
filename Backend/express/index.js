const express = require("express");
const app = express();

// console.dir(app);

let port  = 3000;
app.listen(port,()=>{
    console.log(`app is listening on port ${port}`);
})

app.get('/',(req,res)=>{
    res.send("You are at Home path");
});
app.get('/contact',(req,res)=>{
    res.send("You are at contact path");
});
app.get('/help',(req,res)=>{
    res.send("You  are at help path");
});
app.get('/:username/:id',(req,res)=>{
    let {username,id} = req.params;
    res.send(`Welcome ${username} ${id}`);
})
app.get("/search",(req,res)=>{
    let {q} = req.query;
    if(!q){         // If the query is empty or there is no value
        res.send("Nothing Searched");
    }
    res.send(`Search query is : ${q}`);
})
// app.get('/*',(req,res)=>{
//     res.send("hi");
// });
// app.use((req,res)=>{
//     console.log("request received");
//     let code = "<h1>Fruits</h1><ul><li>Apple</li><li>Mango</li></ul>";
//     res.send(code);
// })
