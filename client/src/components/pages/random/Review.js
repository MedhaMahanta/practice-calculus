import React, { useEffect, useState } from 'react'
import Problem from './Problem';
import axios from 'axios';

const Review = (props) => {
  const emailID = JSON.parse(localStorage.getItem("newUser")).userObject.email;
  const [pset, setPset] = useState(null);
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:4000/user/${emailID}/randomSet`)
      .then ((res) => {
        setPset(res.data[props.index]);
      })
      .catch((err) => console.error(err));
  }, [])

  useEffect(() => {
    if (pset) {
      console.log(pset);
      pset.problemList.map((problem) => {
        axios.get(`http://localhost:4000/problems/find/${problem.id}`)
          .then((res) => {
            setProblems(curr => [...curr, res.data]);

          })
          .catch((err) => console.error(err));
      })
    }
  }, [pset])

  useEffect(() => {
    console.log(problems);
  }, [problems])

  return (
    <div>

        <div className='bg-slate-50 mt-8'>
              {problems.map((quest, index) => {
                let pData = pset.problemList.find(p => p.id == quest.id);
                return <Problem ref = {null} key = {quest.id} pData = {pData} id = {quest.id} topicNum = {quest.topic} problemNum = {(index+1).toString()} question = {quest.question} answer = {quest.answer} solution = {quest.solution}  newSet = {false} psetNum = {props.index}/>
            })}
        </div>
    </div>
  )
}

export default Review