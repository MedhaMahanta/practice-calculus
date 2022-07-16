import React from 'react'

const Progress = (props) => {
  return (
    <a href= {`#${props.index+1}`}><div id = "test" className='rounded-full border-solid border-[1px] border-gray-200 text-gray-500 shadow-md w-10 h-10 text-center pt-1.5 mb-2'>{props.index+1} </div> </a>
  )
}

export default Progress;