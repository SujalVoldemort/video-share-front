import React from 'react'

const Seven = () => {
  return (
    <div className='flex justify-center items-center h-screen p-4'>
        <div className="">
            <button className='py-4 px-6 bg-blue-600 rounded-2xl
             text-white font-bold transition-all duration-300 ease-in-out
             hover:-translate-y-1 hover:bg-blue-950
             flex justify-between items-center group'>
                Download
                <span className='ml-2 text-2xl  group-hover:-rotate-180 transition-all duration-300 ease-in-out'>↓</span>
            </button>
        </div>
    </div>
  )
}

export default Seven