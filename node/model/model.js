import mongoose from "mongoose";
const {Schema} = mongoose;

const books = new Schema
 ({
    name:{type: String, default:'test'},
    author:{type: String, default:'test'},
    editorial:{type: String, default:'test'},
    comentarios:{type: String, default:'test'}
});