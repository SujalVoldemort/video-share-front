import React from 'react'

const Eight = () => {
  return (
    <div className='flex justify-center items-center p-4 bg-gray-100 w-full'>
    
        <div className="w-full max-w-6xl grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4 ">
            {[...Array(8)].map((_, index) => (
                <div key={index} className="bg-white rounded-lg shadow p-4">
                    <div className=" bg-gray-300 rounded mb-4">
                        <img 
                            src={`https://t3.ftcdn.net/jpg/07/12/99/22/360_F_712992290_txDMx5IZuudkzYRUDZWT5zLLKFgQsqGD.jpg`}
                            alt={`Nature ${index + 1}`} 
                            className="w-full h-full object-cover rounded"
                        />
                    </div>
                    <h3 className="text-lg font-bold mb-2">Card Title {index + 1}</h3>
                    <p className="text-gray-600">This is a description for card {index + 1}. It provides more details about the content of the card.</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Eight

