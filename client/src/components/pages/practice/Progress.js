import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom';

const Progress = (props) => {
  let [newColor, setNewColor] = useState([]);

  useEffect(() => {
    setNewColor(props.color.filter((col) => {
      return col.num == props.index+1;
    }));
  }, [props])

  const scroll = () => {
      props.scrollFn(props.index);
  }

  return (
    // <a href= {`#${props.index+1}`} ><div id = "test" className={`rounded-full border-solid border-[1px] text-gray-700 shadow-md w-10 h-10 text-center pt-1.5 mb-2 ${newColor.length > 0 && newColor[0].newColor == "green"? "bg-green-200 border-green-300" : (newColor.length > 0 && newColor[0].newColor == "red" ? "bg-red-200 border-red-300" : "")}`}>{props.index+1}</div> </a>
    <div onClick={scroll} ><div id = "test" className={`rounded-full border-solid border-[1px] text-gray-700 shadow-md w-10 h-10 text-center pt-1.5 mb-2 hover:cursor-pointer
    ${newColor.length > 0 && newColor[0].newColor == "green"? "bg-green-200 border-green-300" : (newColor.length > 0 && newColor[0].newColor == "red" ? "bg-red-200 border-red-300" : "")}`}>{props.index+1}</div> </div>
    )
}

export default Progress;