import React from 'react'

const Six = () => {
    return (
        <div className='flex justify-center items-center h-screen bg-gray-200'>

            {/* The Card */}
            <div className='bg-white p-4 rounded-xl shadow-lg flex items-center gap-4 max-w-sm w-full'>

                {/* Avatar */}
                <div className='h-12 w-12 bg-blue-500 rounded-full flex-shrink-0'></div>

                {/* Text Info */}
                <div className='flex flex-col min-w-0'>
                    <h3 className='font-bold text-lg'>John Doe</h3>
                    <p className='text-gray-500 truncate'>verylongemailaddresswithoutanyspacesthatwillbreakyourlayout@company.com</p>
                </div>

                {/* Action Button (Pushed to the end) */}
                <button className='ml-auto bg-blue-100 text-blue-600 px-3 py-1 rounded font-medium'>
                    Follow
                </button>
            </div>

        </div>
    )
}

export default Six
