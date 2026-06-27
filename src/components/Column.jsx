import React from 'react'

const Column = ({ column }) => {
  return (
    <div className='w-80 rounded-xl bg-white p-4 shadow'>
      <div className="mb-4 flex items-center justify-between">
        <h2 className='text-lg font-bold'>{column.title}</h2>
        <span className='rounded-full bg-gray-200 px-3 py-1 text-sm font-medium'>{column.cards.length}</span>
      </div>
      <div className='min-h-50 space-y-3'>

      </div>
      <button className='mt-4 w-full rounded-lg border border-dashed border-gray-300 py-2 text-sm font-medium transition hover:bg-gray-100'>Add Card</button>
    </div>
  )
}

export default Column