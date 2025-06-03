import React from 'react'
import Card from './Card'

function HomeCards() {
  return (
    <div className="font-sans text-gray-800 tracking-wide">
      {/* <!-- Developers and Employers --> */}
      <section className="py-8">
        <div className="container-xl lg:container m-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 rounded-lg">
            <Card>
              <h2 className="text-3xl font-semibold text-indigo-700 mb-2">For Developers</h2>
              <p className="mt-2 mb-5 text-base text-gray-700 leading-relaxed">
                Browse our React jobs and start your career today.
              </p>
              <a
                href="/jobs.html"
                className="inline-block bg-black text-white rounded-lg px-5 py-2 text-sm font-medium hover:bg-gray-800 transition"
              >
                Browse Jobs
              </a>
            </Card>

            <Card br="bg-indigo-100">
              <h2 className="text-3xl font-semibold text-indigo-700 mb-2">For Employers</h2>
              <p className="mt-2 mb-5 text-base text-gray-700 leading-relaxed">
                List your job to find the perfect developer for the role.
              </p>
              <a
                href="/add-job.html"
                className="inline-block bg-indigo-500 text-white rounded-lg px-5 py-2 text-sm font-medium hover:bg-indigo-600 transition"
              >
                Add Job
              </a>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomeCards;
