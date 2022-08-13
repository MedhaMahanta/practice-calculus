import React, {useState, useEffect} from 'react';
import axios from 'axios';

const PreviousSets = (props) => {
  const [psets, setPsets] = useState([]);
  const emailID = JSON.parse(localStorage.getItem("newUser")).userObject.email;

  useEffect(() => {
    axios.get(`http://localhost:4000/user/${emailID}/randomSet`)
      .then ((res) => {
        setPsets(res.data);
      })
      .catch((err) => console.error(err));
  }, [])

  const review = (index) => {
    props.setIsReviewing(true);
    props.setReviewIndex(index);
  }

  return (
    <div className='mb-8'>
            <div className='grid justify-center ml-8 mt-10 text-lg bg-gray-300 mr-8 pt-1 pb-1'>
              Review Previous Problem Sets
            </div>

            {psets.map((pset, index) => {
              var date = new Date(pset.startedAt);
              return (
              <div onClick={() => review(index)} className={`ml-8 mr-8 p-1 pt-2 pb-2 text-gray-800 hover:cursor-pointer hover:font-semibold ${index % 2 === 1 ? "bg-gray-100" : ""}`}> 
                Practice Set {index+1}
                <span className='ml-3'>
                {pset.filters.map((filter) => {
                  return <span className='text-sm rounded-full bg-purple-200 text-purple-900 mr-2 pl-2 pr-2'> {filter.length === 1 ? " Unit " : ""} {filter} </span>
                })}
                </span>
                <span className='float-right'>
                  {date.getMonth()}/{date.getDay()}/{date.getFullYear()}, {date.getHours() > 12 ? date.getHours()-12 : date.getHours()}:{date.getMinutes()} {date.getHours() > 12 ? "pm": "am"}
                </span>
              </div>)
            })}
          </div>
  )
}

export default PreviousSets;