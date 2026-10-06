import React from 'react'

const Two = () => {
  return (
    <div className='bg-green-950 h-screen w-screen flex justify-center items-center text-white'>
        <div className="max-w-6xl">
            <h1 className='text-4xl font-bold my-4'>Gemini Assignment 2</h1>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="card">
                    <span className='text-6xl'>@</span> <br />
                    Feature 1
                </div>
                <div className="card">
                    <span className='text-6xl'>@</span> <br />
                    Feature 2
                </div>
                <div className="card">
                    <span className='text-6xl'>@</span> <br />
                    Feture 3
                </div>
                <div className="card">
                    <span className='text-6xl'>@</span> <br />
                    Feature 4
                </div>
                <div className="card">
                    <span className='text-6xl'>@</span> <br />
                    Feature 5
                </div>
                <div className="card">
                    <span className='text-6xl'>@</span> <br />
                    Feature 6
                </div>
            </div>
        </div>
    </div>
  )
}

export default Two
