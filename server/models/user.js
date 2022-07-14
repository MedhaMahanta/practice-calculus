import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    emailID: String,
    name: String,
    problemsSolved: [String],
    starredTopics: [String],
    loginCount: {
        type: Number,
        default: 0
    },
},
{ collection: "users"});

var UserModel = mongoose.model("User", userSchema);

export default UserModel;