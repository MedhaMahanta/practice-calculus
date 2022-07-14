import React from 'react';
import Menu from '../Menu';
import Navbar from '../Navbar';
import UnitMenu from './practice/UnitMenu';
import Problem from './practice/Problem';

const Practice = () => {
    const questions = ["Here is the question for number 1.", 
    "Here is the question for number 2. Sometimes they're long",
    "Here is the question for number 3.",
    "Here is the question for number 4. Sometimes they're long",
    "Here is the question for number 5. Sometimes they're long",
    "Here is the short question for number 6. Sometimes they're long",
    "Here is the question for number 7.",
  ]

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
            <div className='col-span-3'>
              {questions.map((quest, index) => {
                return <Problem id = {(index+1).toString} question = {quest}/>
              })}
            </div>


         </div>
          <div className='fixed right-16 top-32 '>
              {questions.map((quest, newIndex) => {
                return <div className='rounded-full border-solid border-[1px] border-gray-200 text-gray-500 shadow-md w-10 h-10 text-center pt-1.5 mb-1'>{newIndex+1} </div> 
              })}

          </div>
        </div>
    </div> 
  )
}

export default Practice;