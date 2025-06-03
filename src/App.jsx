import React from 'react';
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import HomeCards from './component/HomeCards';
import JobListing from './component/JobListing';
import ViewAllJobs from './component/ViewAllJobs';

const App = () => {
  return (
    <div className="text-5xl">
      <Navbar />
      <Hero />
      <HomeCards />
      <JobListing/>
      <ViewAllJobs/>
    </div>
  );
};

export default App;
