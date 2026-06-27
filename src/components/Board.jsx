import React, { useState } from 'react'
import { initialData } from '../data/initialData'
import Column from './Column'
const Board = () => {

  const [boardData, setBoardData] = useState(initialData)
  return (
    <div className="flex gap-6 p-6">

      {boardData.columns.map((column) => (
        <Column key={column.id} column={column} />
      ))

      }
    </div>
  )
}

export default Board