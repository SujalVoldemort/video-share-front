import React from 'react'
import { motion } from 'framer-motion'

const Framer2 = () => {
  return (
    <div 
    className='text-2xl font-bold h-full min-h-screen w-full flex items-center justify-center bg-black'>
      <motion.div 
        whileHover={{scale:1.1}}
        whileTap={{scale:0.9}}
        transition={{type:"spring", stiffness:1000, damping:10}}
        className='p-4 bg-white shadow-lg  cursor-pointer'
        >
            Click Me Card
        </motion.div>

    </div>
  )
}

export default Framer2
