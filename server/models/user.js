import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    emailID: String,
    name: String,
    problemsSolved: [String],
    starredTopics: [String],
},
{ collection: "users"});

var UserModel = mongoose.model("User", userSchema);

export default UserModel;