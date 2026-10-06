import React from 'react'

const Five = () => {
  return (
    <div className='min-h-screen w-full bg-gray-100'>
        {/* SIDEBAR */}
        <div className="fixed inset-y-0 left-0 z-20 w-64 -translate-x-full md:translate-x-0 bg-gray-900 text-white transition-transform duration-300">
            <div className="p-6 text-2xl font-bold">Dashboard</div>
            <ul className="mt-6 space-y-4 px-6">
                <li className="text-gray-300 hover:text-white cursor-pointer">Home</li>
                <li className="text-gray-300 hover:text-white cursor-pointer">Analytics</li>
                <li className="text-gray-300 hover:text-white cursor-pointer">Settings</li>
            </ul>
        </div>

        {/* HEADER */}
        {/* Fix: Removed w-full. Added right-0. Added z-10 to stay above content but below sidebar (on mobile) */}
        <div className="fixed top-0 right-0 left-0 md:left-64 h-16 bg-white shadow-sm z-10 flex items-center px-6">
            <span className="font-semibold text-gray-700">Welcome back, User</span>
        </div>

        {/* MAIN CONTENT */}
        {/* Removed pr-80 (that was creating a huge empty gap on the right!) */}
        <div className="md:pl-64 pt-16 h-full">
            <div className="p-8">
                <h1 className="text-2xl font-bold mb-4">Content Feed</h1>
                <p className="mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, expedita fuga, accusantium fugit neque sed fugiat amet ipsam voluptas sapiente recusandae. 
                </p>
                {/* Generating long content to test scroll */}
                {Array(20).fill("Scroll test... ").map((text, i) => (
                    <p key={i} className="text-gray-600 my-2">
                        {text} Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                ))}
            </div>
        </div>

    </div>
  )
}

export default Five