import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    emailID: String,
    name: String,
    problemsSolved: [
        {
            topic: String,
            probNum: String,
            isCorrect: Boolean,
            latestAns: String
        }
    ],
    starredTopics: [String],
    loginCount: {
        type: Number,
        default: 0
    },
    randomProblems: [
        {
            startedAt: {
                type: Date,
                default: new Date()
            },
            isCompleted: {
                type: Boolean,
                default: false
            },
            problemList: [
                {
                    id: String,
                    isCorrect: {
                        type: String,
                        default: "not answered"
                    },
                    submittedAns: String
                }
            ],
            filters: [String]
        }
    ]
},
{ collection: "users"});

var UserModel = mongoose.model("User", userSchema);

export default UserModel;