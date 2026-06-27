import React from 'react'

const Card = (card) => {
  return (
    <div className='bg-white flex'>
      <h2 className='font-bold'>{card.title}</h2>
      <button className='p-2 border-2 border-black'>X</button>
    </div>
  )
}

export default Card