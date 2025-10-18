const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const { v4: uuidv4 } = require('uuid');
const methodOverride = require('method-override');


`// for using the static file`
app.use(express.urlencoded({extended: true}));

// USING the override package
app.use(methodOverride('_method'))

// Set teh ejs 
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));    // Set the path of views folder

// For useing the static file like CSS from the public folder
app.use(express.static(path.join(__dirname, "public")));

// Create a data for posts using the array
let posts = [
    {   
        id : uuidv4(),  // uuid function to generate new uniqe id
        username : "siddharth",
        content : "I am doing coding"
    },
    {
        id : uuidv4(),  // uuid function to generate new uniqe id
        username : "189251",
        content : "I am doing Math"
    },
    {
        id : uuidv4(),  // uuid function to generate new uniqe id
        username : "199251",
        content : "I am doing Science"
    }
];

// Implement : GET /posts
app.get("/posts",(req,res)=>{       // ALL POSTS
    res.render("index.ejs", { posts });     
})

app.get("/posts/new", (req, res)=>{     // NEW POST 
    res.render("new.ejs");      
})

app.post("/posts", (req, res)=>{    // Getting the new post detail and push the new post in all posts page
    console.log(req.body);

    console.log(posts);     // Check the posts elements.


    let {username, content } = req.body;
    let id = uuidv4();
    posts.push({id, username, content});    // Add the new element in the posts array.

    console.log(posts);     // Check the posts theat new element in added.

    res.redirect("/posts");
})

app.get("/posts/:id",(req,res)=>{
    let { id } = req.params;        
    let post = posts.find((p) => id === p.id );
    console.log(post);
    res.render("show.ejs", { post });
})

app.patch("/posts/:id", (req,res)=>{        // USING the PATCH request to update the post
    let { id } = req.params;
    let newContent = req.body.content;
    let post = posts.find((p) => id === p.id );
    post.content = newContent;
    console.log(post);
    res.redirect("/posts");
})

app.delete("/posts/:id", (req,res)=>{
    let { id } = req.params;
    posts = posts.filter((p) => id != p.id );
    res.redirect("/posts");
})

app.get("/posts/:id/edit", (req,res)=>{
    let { id } = req.params;        
    let post = posts.find((p) => id === p.id );
    res.render("edit.ejs", { post });
})

app.listen(port, (req,res)=>{
    console.log(`port is listing ${port}`);
})