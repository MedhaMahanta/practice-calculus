import React, { useEffect, useState } from 'react'
import Problem from './Problem';
import axios from 'axios';

const Review = (props) => {
  const emailID = JSON.parse(localStorage.getItem("newUser")).userObject.email;
  const [pset, setPset] = useState(null);
  const [problems, setProblems] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:4000/user/${emailID}/randomSet`)
      .then ((res) => {
        setPset(res.data[props.index]);
        //axios get problem with each id in pset.problemList

      })
      .catch((err) => console.error(err));
  }, [])

  return (
    <div>
        {pset ? <div>
             {pset.problemList.map((problem) => {
            return <div>{problem.id}</div>
        })} 
        </div> : ""}
        
    </div>
  )
}

export default Review