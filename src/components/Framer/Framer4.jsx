import { AnimatePresence } from 'framer-motion'
import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Framer4 = () => {

    const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='text-2xl font-bold h-full min-h-screen w-full flex items-center justify-center'>
        <button 
            onClick={()=>{
                setIsOpen(prev=> !prev)
            }}
            className='p-4 bg-gray-700 rounded-2xl text-white hover:scale-125'>Click me</button>
        <AnimatePresence>
            {isOpen && 
                <motion.div 
                    initial={{ opacity:0, y:20}}
                    animate={{ opacity:1, y:0}}
                    exit={{opacity:0, y:20}}
                    transition={{duration:.5}}
                    className='fixed right-10 top-10'
                >
                    Notification here
                </motion.div>
            }
        </AnimatePresence>
    </div>
  )
}

export default Framer4
