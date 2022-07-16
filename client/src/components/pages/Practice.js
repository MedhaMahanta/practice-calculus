import React, { useEffect, useState } from 'react';
import Menu from '../Menu';
import Navbar from '../Navbar';
import UnitMenu from './practice/UnitMenu';
import Problem from './practice/Problem';
import Progress from './practice/Progress';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const Practice = () => {
  const [questions, setQuestions] = useState([]);

  const {state} = useLocation();
  const [newTopic, setNewTopic] = useState(state? state : {topic: {num: "1.1", name: "Evaluating Limits"}});
  useEffect(() => {
    setNewTopic(state? state : {topic: {num: "1.1", name: "Evaluating Limits"}});
  }, [state])

  useEffect(() => {
    axios.get(`http://localhost:4000/problems/filter?topic=${newTopic.topic.num}`)
    .then((res) => {
      setQuestions(res.data);
    })
    .catch((err) => console.error(err));
  }, [newTopic])


  return (
    <div>
        <div className=''>
        <Navbar />
        </div>

        <div className=''> 
          <Menu tab = "tbtp"/>
          <div className='grid grid-cols-5'>
            <div className=' h-screen sticky top-0 col-span-1 overflow-y-scroll scrollbar'>
              <div className='font-semibold text-lg text-center mt-4 mb-4'>Unit Menu</div>
              <UnitMenu/>
            </div>
            <div className='col-span-4 ml-16 mr-[96px]'>
              <div className='text-center text-2xl font-semibold mt-6 mb-3'>  {newTopic.topic.name} </div>
              {questions.map((quest, index) => {
                return <Problem topicNum = {newTopic.topic.num} problemNum = {(index+1).toString()} question = {quest.question} answer = {quest.answer}/>
              })}
            </div>


         </div>
          <div className='fixed right-16 top-32 '>
              {questions.map((quest, newIndex) => {
                return <Progress index = {newIndex}/>
              })}

          </div>
        </div>
    </div> 
  )
}

export default Practice;