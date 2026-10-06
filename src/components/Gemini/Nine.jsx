import React, { useState } from 'react'

const Nine = () => {
    const [isOpen,setIsOpen] = useState(false)
    return (
        <div className='w-full h-full min-h-screen bg-amber-800 flex justify-center items-center p-4'>

            <div className='bg-white p-6 rounded-lg shadow-lg  '>
                <button
                    onClick={()=>setIsOpen(prev=>!prev)}
                    className='bg-amber-600 text-white px-4 py-2 rounded-lg
                     hover:bg-amber-700 hover:-translate-y-1 transition-all 
                        font-bold
                     duration-300 ease-in-out'>
                    Open Drawer
                </button>
            </div>
            <div
             onClick={()=>setIsOpen(false)}
             className={`fixed inset-0 w-full h-full  bg-black transition-opacity duration-300 ease-in-out
             ${isOpen? " opacity-50 pointer-events-auto z-40 ":" opacity-0 pointer-events-none"}`}></div>
            <div className={`fixed inset-y-0 right-0 w-3/4 max-w-sm
            transition-transform duration-300 ease-in-out shadow-lg
              bg-white p-4  ${isOpen?"translate-x-0 z-50":"translate-x-full"}`}> Sidedrawer</div>
            
        </div>
    )
}

export default Nine
