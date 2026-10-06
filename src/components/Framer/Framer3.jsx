import React from 'react'
import {motion} from 'framer-motion'

const Framer3 = () => {
    const containerVariants = {
        hidden: {opacity:0},
        visible: {
            opacity:1,
            transition:{
                staggerChildren:0.2,
            }
        }
    }

    const itemVariants ={
        hidden:{
            opacity:0, 
            x:-50
        },
        visible:{
            opacity:1,
            x:0
        }
    }


  return (
    <div 
        className='text-2xl font-bold h-full min-h-screen w-full flex items-center justify-center'
        >
        <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.div variants={itemVariants}>Item 1</motion.div>
            <motion.div variants={itemVariants}>Item 2</motion.div>
            <motion.div variants={itemVariants}>Item 3</motion.div>
            <motion.div variants={itemVariants}>Item 4</motion.div>

        </motion.div>
      
    </div>
  )
}

export default Framer3
