import React from 'react'
import jobs from '../../jobs.json'; // Assuming you have a jobs.json file with job data
import Single_JobListing from './Single_JobListing';

function JobListing() {
    const recentJobs = jobs.slice(0, 6);
  return (
    <div>
        {/* Browse Jobs */}
      <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            Browse Jobs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentJobs.map((job)  => (
                <Single_JobListing key = {job.id} job = {job}/>
            ))}
            </div>
        </div>
      </section>
    </div>
  )
}

export default JobListing