import React, { useState } from 'react'
import { initialData } from '../data/initialData'
const Board = () => {

  const [boardData, setBoardData] = useState(initialData)
  return (
    <div className='w-full flex '>
    {
     boardData.columns.map((column)=>(
      <div key = {column.id} className='w-80 rounded-lg bg-gray-100 p-4 shadow'> 
      <h2 className='mb-4 text-xl font-bold'>{column.title}</h2>
      </div>
     )

     )
    }

    </div>
  )
}

export default Board