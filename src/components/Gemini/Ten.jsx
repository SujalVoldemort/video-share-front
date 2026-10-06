import React from 'react'

const Ten = () => {
  return (
    <div className='p-10 bg-gray-100 flex justify-center'>
      
      {/* 1. The Parent Container 
         - default: border is gray-300
         - focus-within: border becomes blue-500 and text becomes blue-500
      */}
      <div className="
          flex items-center gap-3 px-4 py-3 rounded-lg bg-white border-2 border-gray-300 
          focus-within:border-blue-500 focus-within:text-blue-500 w-full max-w-md focus-within:max-w-lg
          transition-colors duration-300 group h-12
      ">
        
        {/* The Icon (Will turn blue because parent has focus-within:text-blue-500) */}
        <span className="text-xl group-focus-within:hidden">🔍</span>

        {/* 2. The Child Input 
           - focus:outline-none (CRITICAL! We remove the default browser ring 
             so the parent handles the styling instead)
        */}
        <input 
          type="text" 
          placeholder="Search..." 
          className="outline-none text-gray-700 w-full"
        />

      </div>

    </div>
  )
}

export default Ten
