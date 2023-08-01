import React from 'react'

function OrderCard({ imgUrl, title, description, price }) {
  return (
    <div className="w-full h-32 flex items-center justify-between gap-x-2">
      <figure className="w-full h-full">
        <img
          src={imgUrl}
          alt="image api"
          className="w-full h-32 rounded-lg object-cover object-center"
        />
      </figure>

      <div className="w-full flex flex-col items-start justify-start gap-y-1">
        <h2 className='text-xl font-semibold'>{title}</h2>
        <p className="truncate w-24">{description}</p>
      </div>

      <div className="w-full flex justify-end">
        <span className='font-bold'>{price}$</span>
      </div>
    </div>
  )
}

export default OrderCard