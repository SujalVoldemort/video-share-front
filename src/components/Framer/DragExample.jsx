import { motion } from "framer-motion"
import { useRef } from "react"

const DragExample = () => {
  // 1. Create a reference for the boundary box
  const constraintsRef = useRef(null)
  console.log(this)

  return (
    <div className="...">
      
      {/* 2. Attach the ref to the Parent "Jail" */}
      <motion.div className="container..." ref={constraintsRef}>
        
        {/* 3. Give the Child the constraints */}
        <motion.div 
            drag 
            dragConstraints={constraintsRef} 
            dragElastic={0.2} // 0 = stiff wall, 1 = super stretchy
            className="box..."
        />
        
      </motion.div>

    </div>
  )
}

export default DragExample