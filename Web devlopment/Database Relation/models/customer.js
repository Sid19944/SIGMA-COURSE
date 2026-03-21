const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { Schema } = mongoose;

main()
  .then((res) => {
    console.log("Connected with MongoDb");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

const orderSchema = new Schema({
  item: String,
  price: Number,
});

const customerSchema = new Schema({
  name: String,
  orders: [
    {
      type: Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
});

// Pre middleware
// customerSchema.post("findOneAndDelete", async () => {
//   console.log("Post Middleware");
// });

// Post middleware
customerSchema.post("findOneAndDelete", async (customer) => {
  if (customer.orders.length) {
    let res = await Order.deleteMany({ _id: { $in: customer.orders } });
    console.log(res);
  }
});

const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);

const addCustomer = async () => {
  let cus = await new Customer({
    name: "prem",
  });

  let order = new Order({
    item: "Hot Choclate",
    price: 10,
  });

  cus.orders.push(order);
  await cus.save();
  await order.save();
  console.log("customer added");
};

// addCustomer();

const findOrder = async () => {
  let result = await Customer.find({name : "prem"}).populate("orders");
  console.log(result[0]);
};
// findOrder();

// const addOrder = async () => {
//   let res = await Order.insertMany([
//     { item: "Samoso", price: 12 },
//     { item: "Chips", price: 10 },
//     { item: "Coca cola", price: 20 },
//   ]);
//   console.log(res);
// };

// addOrder();

const delCus = async () => {
  let del = await Customer.findByIdAndDelete('68e9e93cb83ce8cfa4e88ec5');
  console.log(del)
};
// delCus();
