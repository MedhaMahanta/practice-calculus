import React from 'react'

const Problem = (props) => {
  return (
    <div className='pt-2 pl-10'>
        <div>
            1. {props.question}
        </div>
        <form className='ml-4 mt-3'>
            <label>
                Answer: 
                <input type="text" name = "answer" className='p-1 m-2 border-solid border-[1px] border-gray-400 w-32'/>
            </label>
            <input type="submit" value="Check Answer" className='ml-4 border-solid border-[1px] hover:shadow-md text-gray-700 py-1.5 px-4 rounded-full hover:cursor-pointer' />
        </form>
    </div>
  )
}

export default Problem;