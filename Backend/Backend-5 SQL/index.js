const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const { v4: uuidv4 } = require('uuid');
const methodOverride = require("method-override");

//set ejs
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views")); 

// for using the static file
app.use(express.urlencoded({extended: true}));

// Using th eoverride package like delete etc.
app.use(methodOverride('_method'));

// For using the static files like CSS And JavaScript from the public folder
app.use(express.static(path.join(__dirname, "public/css")));


const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const { send } = require("process");

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password: "199251@Sid"
});



// //Insert data with placeholder's

// let q = "INSERT INTO user(id, username, email, password) VALUE ?";
// let users =[
//   ["1234", "123B_user", "123B@gmail.com", "123ABCB"],
//   ["12345", "123C_user", "123C@gmail.com", "123ABCC"]
// ];

// try {
//   connection.query(q, [users], (err,result)=>{
//     if(err) throw err;
//     console.log(result);
//   });
// } catch (err) {
//   console.log(err);
// }

// try {
//   connection.query ("SHOW TABLES", (err,result)=>{       // To show the tables;
//   if(err) throw err;
//   console.log(result);
//   });
// } catch (err){
//   console.log(err);
// }

//--------------------------------------------------------------------------------------------------------------------------------------
                        // USE THE Faker for FAKE DATA STORE IN THE DATABASE.

// let getRandomUser= ()=>{
//   return [                          // Return the value in a array form.
//     faker.string.uuid(),
//     faker.internet.username(),
//     faker.internet.email(),
//     faker.internet.password(),
//   ];
// }

// let q = "INSERT INTO user(id, username, email, password) VALUE ?";

// let data = [];
// for(let i=1; i<=100; i++){
//   data.push(getRandomUser());
// }
// console.log(data);

// try{
//   connection.query(q,[data], (err,result)=>{
//     if(err) throw err;
//     console.log(result);
//   });
// } catch (err) {
//   console.log(err);
// }

// try {
//   connection.query(q, [data], (err,result)=>{
//     if(err) throw err;
//     else{
//     console.log(result);
//     }
//   });
// } catch (err) {
//   console.log(err);
// }

//-------------------------------------------------------------------------------------------------------------


// Show the total number of user in our database.
app.get("/count", (req, res)=>{
  let q = "SELECT count(*) FROM user";
  try {
    connection.query(q, (err, result)=>{
      if(err) throw err;
      let count = (result[0]['count(*)']);
      res.render("home.ejs", {count});
    });
  }catch (err) {
    console.log(err);
  }
})

// Show all users data.
app.get("/user", (req,res)=>{
  let q = "SELECT * FROM user";
  try {
    connection.query(q, (err,result)=>{
      if(err) throw err;
      let data = result;
      // console.log(data.length);
      res.render("user.ejs", {data});
    });
  } catch (err) {
    console.log(err);
  }
})

// Edit form.
app.get("/user/:id/edit", (req,res)=>{
  let {id} = req.params;
  let q = `SELECT * FROM user WHERE id="${id}"`;
  try {
    connection.query(q, (err,result)=>{
      if(err) throw err;
      let user = (result[0]);
      res.render("edit.ejs", {user})
    });
  }catch (err) {
    console.log(err);
  }
  
})


// Update (DB) username Route
app.patch("/user/:id", (req,res)=>{
  let {id} = req.params;
  let body = req.body;
  
  let q = `SELECT * FROM user WHERE id="${id}"`;
  try {
    connection.query(q, (err, result)=>{
      if(err) throw err;
      let user = result[0];
      if(body.password == user.password){
        let q2 = `UPDATE user SET username="${body.username}" WHERE username="${user.username}"`;
        try {
          connection.query(q2, (err,result)=>{
            if(err) throw err;
            res.redirect("/user");
          })
        } catch (err){
          console.log(err);
        }
      } else {
        res.render("wrongPass.ejs");
      }
    })
  }catch (err) {
    console.log(err);
  }
})


// new user form
app.get("/user/add", (req,res)=>{
  let id = uuidv4();
  res.render("add.ejs", {id});
})

// Add new user route
app.post("/user", (req,res)=>{
  console.log(req.body);
  let data = req.body;
  let u_data = [data.id, data.username, data.email, data.password];
  let q = `INSERT INTO user(id, username, email, password) VALUE (?, ?, ?, ?)`;
  try {
    connection.query(q, u_data, (err,result)=>{
      if(err) throw err;
      res.redirect("/user");
      console.log(result);
    })
  }catch (err) {
    console.log(err);
  }
})


// delete the selected row
app.delete("/user/:id", (req,res)=>{
  let {id} = req.params;
  console.log(id);
  let q = `DELETE FROM user WHERE id="${id}"`;
  try{
    connection.query(q, (err, result)=>{
      if(err) throw err;
      console.log(result);
      res.redirect("/user");
    })
  } catch (err) {
    console.log(err);
  }
})


app.listen(port, ()=>{
  console.log(`server is listening post ${port}`);
});