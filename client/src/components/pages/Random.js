import React, { useState} from 'react';
import Menu from '../Menu';
import Navbar from '../Navbar';
import axios from 'axios';
import Problem from './random/Problem';
import Review from './random/Review';
import PreviousSets from './random/PreviousSets';

const Random = () => {
  const [selectedUnits, setUnits] = useState([]);
  const [selectedConcepts, setConcepts] = useState([]);
  const [selectedTags, setTags] = useState([]);

  const [questions, setQuestions] = useState([]);

  const units = ["Unit 1: Limits and Continuity", "Unit 2: Understanding Derivatives", "Unit 3: Advanced Rules of Differentiation"]
  const concepts = ["Limits", "Derivatives", "Integrals"];
  const tags = ["Graphs", "Tables", "Word Problems", "Functions"];

  const [count, setCount] = useState(10);
  const [color, setColor] = useState(null);

  const [isSolving, setIsSolving] = useState(false);
  const [isReviewing, setIsReviewing] = useState(false);
  const [reviewIndex, setReviewIndex] = useState(null);

  const emailID = JSON.parse(localStorage.getItem("newUser")).userObject.email;

  const submitFilters = () => {
    if (selectedUnits.length === 0 && selectedConcepts.length === 0 && selectedTags.length === 0) {
      console.log("none selected");
    }
    else {
      setIsSolving(true);
      let queryString = `http://localhost:4000/problems/filter?`;
      let multiple = false;
      if (selectedUnits.length !== 0) {
        queryString += `unit=${selectedUnits.join(',')}`;
        multiple = true;
      }
      if (selectedConcepts.length !== 0 || selectedTags.length !== 0) {
        if (multiple) {
          queryString += `&`;
        }
        queryString += `tags=${selectedConcepts.join(',')+','+selectedTags.join(',')}`; 
      }
      axios.get(queryString)
      .then((res) => {
        let probs = res.data;
        console.log(probs);
        probs.sort(() => Math.random() - 0.5);
        console.log(probs);

        setQuestions(probs);
        const newSet = {
          startedAt: Date.now(),
          problemList: [],
          filters: [...selectedUnits, ...selectedConcepts, ...selectedTags]
        } 
        probs.forEach((q, index) => {
          if (index < count) {
            const newProb = {
              id: q.id,
              isCorrect: "not answered",
              submittedAns: ""
            }
            newSet.problemList.push(newProb);
          }
        })
        axios.post(`http://localhost:4000/user/${emailID}/randomSet`, newSet);
      })
      .catch((err) => console.error(err));      
    }
  }

  return (
    <div>
        <Navbar/>
        <div className=''> 
          <Menu tab = "rgp"/>
          <div className={`m-5 ml-8 ${isSolving || isReviewing ? "hidden" : "block"}`}>
            Please select any filters below or leave them blank.
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline ml-1 icon" viewBox="0 0 20 20" fill="gray">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
            </svg>
            <div className='random-popup bg-gray-500 text-gray-100 text-sm p-1 pl-2 pr-2 rounded-lg w-48'>
              Filters in different rows below are applied independently. For example, selecting <b>Unit 1</b>, <b>integrals</b>, and <b>graphs</b> finds problems from <b>Unit 1</b>, problems with <b>integrals</b>, <i>and</i> problems with <b>graphs</b>.
            </div>
          </div>
          <div className={`mt-3 ml-10 ${isSolving || isReviewing ? "hidden" : "block"}`}>
            <div className='mt-3 mb-3'>
              Units:
              {units.map((unit) => {
                return (<span  className={`bg-slate-200 rounded-lg m-2 text-sm pl-2 pr-2 shadow-md ${selectedUnits.includes(unit.charAt(5)) ? "bg-sky-400": ""}`}> {unit} 
                  <span className='rounded-full ml-1 pl-1 pr-1 bg-gray-50 hover:cursor-pointer hover:bg-blue-700 hover:text-white'>
                    {selectedUnits.includes(unit.charAt(5)) ? 
                      <span onClick={() => {setUnits((prev) => prev.filter(p => p != unit.charAt(5)))}}> x </span> : 
                      <span onClick={() => {setUnits((prev) => ([...prev, unit.charAt(5)]))}}> + </span>}
                  </span>
                </span>)
              })}
            </div>
            <div className='mt-3 mb-3'>
              Main Concepts:
              {concepts.map((concept) => {
                return (<span  className={`bg-slate-200 rounded-lg m-2 text-sm pl-2 pr-2 shadow-md ${selectedConcepts.includes(concept) ? "bg-sky-400": ""}`}> {concept} 
                  <span className='rounded-full ml-1 pl-1 pr-1 bg-gray-50 hover:cursor-pointer hover:bg-blue-700 hover:text-white'>
                    {selectedConcepts.includes(concept) ? 
                      <span onClick={() => {setConcepts((prev) => prev.filter(p => p != concept))}}> x </span> : 
                      <span onClick={() => {setConcepts((prev) => ([...prev, concept]))}}> + </span>}
                  </span>
                </span>)
              })}
            </div>
            <div className='mt-3 mb-3'>
              Tags:
              {tags.map((tag) => {
                return (<span  className={`bg-slate-200 rounded-lg m-2 text-sm pl-2 pr-2 shadow-md ${selectedTags.includes(tag) ? "bg-sky-400": ""}`}> {tag} 
                  <span className='rounded-full ml-1 pl-1 pr-1 bg-gray-50 hover:cursor-pointer hover:bg-blue-700 hover:text-white'>
                    {selectedTags.includes(tag) ? 
                      <span onClick={() => {setTags((prev) => prev.filter(p => p != tag))}}> x </span> : 
                      <span onClick={() => {setTags((prev) => ([...prev, tag]))}}> + </span>}
                  </span>
                </span>)
              })}
            </div>
            <div>
              Number of Problems: 
              <span className='bg-gray-100 shadow-md ml-2 mr-2 hover:cursor-pointer' onClick={() => setCount((prev) => prev-1)}> - </span>
              <span> {count} </span>
              <span className='bg-gray-100 shadow-md ml-2 mr-2 hover:cursor-pointer' onClick={() => setCount((prev) => prev+1)}> + </span>
            </div>
            
            <div className='grid place-items-center mr-10'>
              <span onClick={submitFilters} className='hover:cursor-pointer bg-indigo-600 text-gray-100 pl-3 pr-3 pt-1 pb-1 rounded-full hover:bg-indigo-900 hover:shadow-lg'>
                Search problems
              </span>
            </div>
          </div>

          <div className={` m-8 ${isSolving ? "block" : "hidden"}`}>
            <span onClick={() => {setIsSolving(false)}} className=' bg-slate-200 p-1 pl-2 pr-2 cursor-pointer rounded-full shadow-md hover:shadow-slate-300'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline pb-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
               Back
            </span>
            <div className='bg-slate-50 mt-8'>
              {questions.map((quest, index) => {
              if (index < count) {
                return <Problem ref = {null} key = {quest.id} id = {quest.id} topicNum = {quest.topic} problemNum = {(index+1).toString()} question = {quest.question} answer = {quest.answer} solution = {quest.solution} setColor = {setColor} newSet = {true}/>
              }
            })}
            </div>
          </div>

          <div>
            {!isSolving && !isReviewing ?  <PreviousSets setIsReviewing = {setIsReviewing} setReviewIndex = {setReviewIndex} /> : ""}
          </div>

          <div className='mt-8 ml-8'> 
            {isReviewing ? <div>
              <span onClick={() => {window.location.reload()}} className=' bg-slate-200 p-1 pl-2 pr-2 cursor-pointer rounded-full shadow-md hover:shadow-slate-300'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline pb-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
                Back
              </span>
              <div className=''> <Review index = {reviewIndex}/> </div>
              </div> : ""}
          </div>

        </div>
    </div>
  )
}

export default Random;