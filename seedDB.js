import { BSON } from "../../../../../Library/Caches/typescript/2.6/node_modules/@types/bson";

const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/reactreadinglist"
  );

const items = [
    {renter: "Jessica Son", category: "Camping", item: "Tent", description: "My tent is available!", img: "", available: bool, rentee: "", reviews: "", rating: number}, ,
    {renter: "Michael", category: "Camping", item: "tent", description: "This is my favorite tent", img: ""}
]

db.itemSchema
 .remove({})
 .then(() => db.itemSchema.collection.insertMany(items))
 .then(data => {
   console.log(data.result.n + " items inserted!");
   process.exit(0);
 })
 .catch(err => {
   console.error(err);
   process.exit(1);
 });