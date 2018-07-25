import { BSON } from "../../../../../Library/Caches/typescript/2.6/node_modules/@types/bson";

const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    ""
  );

const items = [
    {
        user: "Jessica Son",
        role: "Renter",
        category: "Camping",
        item: "Tent",
        description: "My tent is available!"
    }
]