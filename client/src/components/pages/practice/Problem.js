import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import Latex from "react-latex";

const Problem = React.forwardRef((props, ref) => {
  const [probStatus, setProbStatus] = useState("notAnswered");
  const [userAns, setUserAns] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isSolution, setIsSolution] = useState(false);


  const test = "What is $(3\\times 4) \\div (5-3)$";

  const emailID = JSON.parse(localStorage.getItem("newUser")).userObject.email;
  
  useEffect(() => {
    props.setColor([]);
  }, [props.topicNum])

  useEffect(() => {
    axios.get(`http://localhost:4000/user/${emailID}/solved?topic=${props.topicNum}&problemNum=${props.problemNum}`)
    .then((res) => {
      setIsLoading(false);
      if (res.data.isCorrect) {
        setProbStatus("correct");
        setIsDisabled(true);
        setUserAns(res.data.latestAns);
        props.setColor((prev) => ([...prev, {num: props.problemNum, newColor: "green"}]));
      }
      if (res.data !== "" && !res.data.isCorrect) {
        setProbStatus("incorrect");
        setUserAns(res.data.latestAns);
        props.setColor((prev) => ([...prev, {num: props.problemNum, newColor: "red"}]));
      }
      if (res.data === "") {
        // console.log(res.data);
        // console.log(res);
        // setProbStatus("notAnswered");
        // setIsDisabled(false);
        props.setColor((prev) => ([...prev, {num: props.problemNum, newColor: "white"}]));
        console.log(res.data.probNum);
      }
      
    })
    .catch((err) => console.error(err));
    
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

    axios.patch(`http://localhost:4000/user/${emailID}/problemsSolved`, probData);
    window.location.reload();
  }
  
  const viewSolution = () => {
    setIsSolution((prev) => !prev);
  }

  return (
    <div ref = {ref} id = {props.problemNum} className='pt-2 pl-10 mb-5'>
        <div>
          {isLoading? <ClipLoader color="#2632a0" speedMultiplier={0.8} /> : ""} 
          {props.problemNum}.&nbsp;
          <Latex >{props.question}</Latex>
        </div>
        <form className='ml-4 mt-3' onSubmit={handleSubmit} autoComplete="off">
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
            {probStatus === "incorrect" ? <span className='ml-2'> <span> or</span> <span className='inline ml-1 underline text-blue-500 italic hover:cursor-pointer' onClick={viewSolution}> view solution </span> </span> : ""}
            {isSolution ? <div className='bg-slate-300 w-3/5 p-3 mt-2 rounded-lg'> {props.solution} </div> : ""}
        </form>
    </div>
  )
})


export default Problem;