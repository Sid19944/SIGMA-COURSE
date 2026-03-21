const mongoose = require("mongoose");

main().then(()=>{
    console.log("connection success");
})
.catch((err) => {
    console.log(err);
})

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

const bookSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true,
        lowercase : true,
    },
    author : {
        type : String,
    },
    price : {
        type : Number,
        min : [10, "Price to to low for the amazon."],
        enum : [10, 50, 100, 500,1000],
    },
    category : {
        type : String,
        enum : ["fiction", "non-fiction"],
    },
    genre : [String],
});

const Book = new mongoose.model("Book", bookSchema);

let book1 = new Book({
    title  : "bon apptite",
    author : "sun ju",
    price : "500",             // we can use numbers as string
    genre : ["good", "very good", "very very good"],
});

// book1.save().then(res=>console.log(res)).catch(err=>console.log(err));

Book.findByIdAndUpdate('68cb8113e98c1b6540a366c9', {price : -100}, {runValidators : true})
.then(res=>console.log(res)).catch(err=>console.log(err.errors.price.properties.message));

// Book.find({price : {$gt : 1000}}).then(res=>console.log(res)).catch(err=>console.log(err));     // use to find the document ( price > 1000 ).

// Book.findById('68ca977528e81dc5c8904a0c').then(res=>console.log(res)).catch(err=>console.log(err));     // use to find the document using the id.

// Book.find({author : "sun ju"}).then(res=>console.log(res)).catch(err=>console.log(err));        // use to find the document using the author name.

// Book.findOne({author : "sun ju"}).then(res=>console.log(res)).catch(err=>console.loog(err));        // use to find one document using the author name.

// Book.insertMany([
//     {author : "Maharshi Valmiki", title : "Ramayan", price : "1000000000000000", category : "fiction"},
//     {title : "Mahabharat", author :"Maharshi Ved Vayas", price : "1000000000000000", category  : "non-fiction"},
// ]).then(res=>console.log(res)).catch(err=>console.log(err));

// Book.updateMany({price : {$gt : 100000}}, {price : 1000000000000000000000000}).then(res=>console.log(res)).catch(err=>console.log(err));