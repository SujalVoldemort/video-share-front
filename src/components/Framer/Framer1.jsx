import React from 'react'
import { motion } from 'framer-motion'

const Framer1 = () => {
  return (
    <div>
      <motion.div 
        initial={{opacity:0, x:-100}}
        animate={{opacity:1, x:0}}
        transition={{duration:1}} 
        className='text-2xl font-bold h-full min-h-screen w-full flex items-center justify-center'>
        Hello
      </motion.div>
    </div>
  )
}

export default Framer1