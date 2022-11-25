import React, { useEffect, useRef, useState } from 'react';
import Menu from '../Menu';
import Navbar from '../Navbar';
import UnitMenu from './practice/UnitMenu';
import Problem from './practice/Problem';
import Progress from './practice/Progress';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const Practice = () => {
  const [questions, setQuestions] = useState([]);
  const [color, setColor] = useState([]);
  const [star, setStar] = useState(false);

  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const ref5 = useRef();
  const ref6 = useRef();
  const refs = [ref1, ref2, ref3, ref4, ref5, ref6];
  function scrolltoProb(refNum) {
    console.log(refNum);
    console.log("was clicked");
    refs[refNum].current.scrollIntoView({behavior: "smooth"});
  }

  const emailID = JSON.parse(localStorage.getItem("newUser")).userObject.email;

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

    let tempData = {num: newTopic.topic.num}
    axios.get(`http://localhost:4000/user/${emailID}/starredTopics`, tempData)
    .then((res) => {
      setStar(res.data.includes(newTopic.topic.num));
    })
    .catch((err) => console.error(err)); 
  }, [newTopic])

  const addStar = () => {
    let topicData = {
      topic: newTopic.topic.num,
      add: true
    }
    if (star) {
      setStar(false);
      topicData.add = false;
      axios.patch(`http://localhost:4000/user/${emailID}/starredTopics`, topicData);
    }
    else {
      setStar(true);
      axios.patch(`http://localhost:4000/user/${emailID}/starredTopics`, topicData);
    }
  }


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
            <div className='col-span-4 ml-16 mr-[150px]'>
              <div className='text-center text-2xl font-semibold mt-6 mb-3'> {newTopic.topic.num} {newTopic.topic.name} 
                <svg onClick={addStar} xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 inline ml-2 -mt-1 stroke-amber-400 hover:cursor-pointer ${star? "fill-amber-400" : "fill-white" }`} viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              {questions.map((quest, index) => {
                return <Problem ref = {refs[index]} key = {quest.id} topicNum = {newTopic.topic.num} problemNum = {(index+1).toString()} question = {quest.question} answer = {quest.answer} solution = {quest.solution} setColor = {setColor}/>
              })}
            </div>
          </div>
          <div className='fixed right-32 top-36 '>
              {questions.map((quest, newIndex) => {
                return <Progress scrollFn = {scrolltoProb} key = {quest.id} index = {newIndex} color = {color} topic = {newTopic.topic} />
              })}
          </div>
        </div>
    </div> 
  )
}

export default Practice;