import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Problem = (props) => {

  const [userAns, setUserAns] = useState("");
  const [probStatus, setProbStatus] = useState("notAnswered");
  console.log(props.question);
  console.log(userAns)

  useEffect(() => {
    setUserAns("");
  }, [props])

  const handleSubmit = (event) => {
    event.preventDefault();

    const probData = {
      topic: props.topicNum,
      probNum: props.problemNum,
      isCorrect: (userAns === props.answer),
      latestAns: userAns
    }

    if (userAns === props.answer) {
      setProbStatus("correct");
    } else {
      setProbStatus("incorrect")
    }

    const obj = localStorage.getItem("newUser");
    const emailID = JSON.parse(localStorage.getItem("newUser")).userObject.email;
    axios.patch(`http://localhost:4000/user/${emailID}/problemsSolved`, probData);

  }

  return (
    <div id = {props.problemNum} className='pt-2 pl-10 mb-5'>
        <div>
        {props.problemNum}. {props.question}
        </div>
        <form className='ml-4 mt-3' onSubmit={handleSubmit} autocomplete="off">
            <label>
                Answer: 
                <input type="text" value = {userAns || ""} name = "answer" onChange = {(e) => {setUserAns(e.target.value)}} 
                className={`p-1 m-2 border-solid border-[1px] border-gray-400 w-32 
                ${probStatus === "correct" ? "bg-green-200 border-green-400" : (probStatus === "incorrect" ? "bg-red-200 border-red-400 ": "")}`}/>
            </label>
            <input type="submit" value="Check Answer" className='ml-4 border-solid border-[1px] hover:shadow-md text-gray-700 py-1.5 px-4 rounded-full hover:cursor-pointer' />
        </form>
    </div>
  )
}

export default Problem;