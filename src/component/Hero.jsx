import React from 'react'

function Hero(props) {
  return (
    <div>
    <section className="bg-indigo-700 py-20 mb-4">
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center"
      >
        <div className="text-center">
          <h1
            className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl"
          >
            {props.title || "Find Your Dream React Job"}
          </h1>
          <p className="my-4 text-xl text-white">
            {props.subtitle || "Explore the best React job opportunities and take your career to the next level."}
          </p>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Hero