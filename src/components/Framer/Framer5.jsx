import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Framer5 = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className='h-screen w-full flex items-center justify-center bg-gray-100'>
            
            <motion.div 
                // 1. We animate the HEIGHT explicitly. 
                // "auto" means "fit the content", "80px" is the closed height.
                animate={{ opacity:1, height: isOpen ? "auto" : "80px" }} 
                initial={{opacity:0}}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                
                // 2. We hide the overflow so content doesn't poke out while shrinking
                className='bg-white shadow-xl rounded-2xl w-64 overflow-hidden cursor-pointer relative'
                onClick={() => setIsOpen(!isOpen)}
            >
                {/* 3. We put padding inside a wrapper, NOT the motion.div.
                       This ensures the text stays stable while the "window" closes. */}
                <div className="p-6">
                    <h2 className='text-xl font-bold text-black'>
                        Accordion Title
                    </h2>

                    <AnimatePresence>
                        {isOpen && (
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2 }} // Fade content fast
                                className='text-base font-normal text-gray-600 mt-4'
                            >
                                Hidden Item. 
                                This text will never stretch because we are changing the actual DOM height.
                            </motion.p>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>
        </div>
    
    )
}

export default Framer5