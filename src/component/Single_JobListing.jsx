import React from 'react';
import { useState } from 'react';
import {FaMapMarker} from 'react-icons/fa';


function Single_JobListing({ job }) {
  const [showFullDescription, setShowFullDescription] = useState(false);
  
  let description = job.description;

  if(!showFullDescription){
    description = description.substring(0, 90) + '...';
  }

  return (
    <div className="font-sans text-gray-800 tracking-wide">
      <div className="bg-white rounded-xl shadow-md relative">
        <div className="p-5">
          <div className="mb-6">
            <div className="text-gray-500 text-sm font-medium mb-1">{job.type}</div>
            <h3 className="text-2xl font-semibold text-indigo-700">{job.title}</h3>
          </div>
          <div className="mb-5 text-base leading-relaxed text-gray-700">
            {description}
          </div>

          <button onClick={() => setShowFullDescription((prevState) => !prevState)} className="text-indigo-500 pb-8 hover:Text-indigo-900 text-base">{showFullDescription ? 'Show Less' : 'Show More'}</button>


          <h4 className="text-indigo-500 font-semibold text-lg mb-3">{job.salary} / Year</h4>
          <div className="border border-gray-100 mb-5"></div>
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-3">
            <div className="text-orange-700 text-sm font-medium flex items-center">
              <FaMapMarker className='inline text-lg mb-1 mr-1' />
              {job.location}
            </div>
            <a
              href={`/job/${job.id}`}
              className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-5 py-2 rounded-lg text-center text-sm font-semibold transition"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Single_JobListing;
