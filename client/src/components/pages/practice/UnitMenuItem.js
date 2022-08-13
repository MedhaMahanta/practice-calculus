import React from 'react'
import { useNavigate } from 'react-router-dom'

const UnitMenuItem = (props) => {

    const navigate = useNavigate();

    const viewTopic = (topic) => {
        navigate('/practice', { state: { topic: topic} });
    }
  return (
    <div className=' '>
        <div className='relative w-full overflow-hidden'>
            <input className = 'peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer' type = 'checkbox'/>
            <hr/>
            <div className=' h-12 w-full pl-5 flex items-center'>
                <h1 className = "text-lg font-semibold ">
                    Unit {props.unit}
                </h1>
            </div>
            <div className='absolute top-3 right-3  transition-transform duration-300 rotate-0 peer-checked:rotate-180'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </div>
            {props.topics.map((topic) => {
                
                return (
                <div key = {topic.num} className='max-h-0 peer-checked:max-h-40 bg-white overflow-hidden transition-all duration-300 '>
                    <div className='p-4 hover:cursor-pointer hover:bg-gray-100' onClick={() => viewTopic(topic)}>
                        <p> {topic.num} {topic.name} </p>
                    </div>
                </div>)
            })}
        </div>
    </div>
  )
}

export default UnitMenuItem;