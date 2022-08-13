import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import Latex from "react-latex";

const Problem = (props) => {
  const [probStatus, setProbStatus] = useState("notAnswered");
  const [userAns, setUserAns] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);

  const emailID = JSON.parse(localStorage.getItem("newUser")).userObject.email;
  
  useEffect(() => {
    props.setColor([]);
    console.log(props.ref);
  }, [props.topicNum])

  useEffect(() => {
    console.log(props.problemNum);    
  }, [props.problemNum])

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
      setIsDisabled(true);
    } else {
      setProbStatus("incorrect");
      setIsDisabled(false); 
    }
  }
  

  return (
    <div  id = {props.problemNum} className='pt-2 pl-10 mb-5'>
        <div>
          {props.problemNum}.&nbsp;
          <Latex >{props.question}</Latex>
        </div>
        <form className='ml-4 mt-3' onSubmit={handleSubmit} autocomplete="off">
            <label>
                Answer: 
                <input type="text" value = {userAns || ""} disabled = {isDisabled} name = "answer" onChange = {(e) => {setUserAns(e.target.value)}} 
                className={`p-1 m-2 border-solid border-[1px] border-gray-400 w-32 
                ${probStatus === "correct" ? "bg-green-200 border-green-400" : (probStatus === "incorrect" ? "bg-red-200 border-red-400 ": "")}`}/>
            </label>
            {probStatus === "correct"
              ? <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg> 
              : <input type="submit" value={probStatus === "notAnswered" ? "Check Answer" : "Try Again"} className='ml-4 border-solid border-[1px] hover:shadow-md text-gray-700 py-1.5 px-4 rounded-full hover:cursor-pointer' />
            }
            
        </form>
    </div>
  )
}


export default Problem;