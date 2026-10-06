import React from 'react'

const Main = () => {
    return (
        <div className='min-h-screen w-full bg-red-900 flex justify-center items-center p-4'>
            {/* 1. Changed w-70 to w-full max-w-sm (mobile friendly) 
               2. Kept your md:max-w-2xl logic
            */}
            <div className="bg-white rounded-2xl flex flex-col md:flex-row gap-6 p-6 w-full max-w-sm md:max-w-2xl items-center shadow-xl">
                
                {/* Image: fixed classes to standard w-64 / w-80 */}
                <img
                    className='w-64 md:w-80 aspect-square object-cover rounded-xl shadow-md'
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?cs=srgb&dl=pexels-italo-melo-881954-2379004.jpg&fm=jpg"
                    alt="Profile" 
                />

                {/* TEXT WRAPPER 
                   Mobile: text-center (centers text), items-center (centers flex children if any)
                   Desktop: md:text-left, md:items-start 
                */}
                <div className='flex flex-col gap-2 text-center md:text-left items-center md:items-start'>
                    <h2 className='text-2xl font-bold text-gray-800'>Sujal Patil</h2>
                    <h6 className='text-lg font-semibold text-red-600'>Frontend Engineer</h6>
                    <p className='text-gray-600 leading-relaxed'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe ratione magnam expedita temporibus?
                    </p>
                    
                    {/* Added a button to show alignment clearly */}
                    <button className="bg-red-900 text-white px-6 py-2 rounded-lg mt-2 hover:bg-red-800 transition">
                        Contact Me
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Main