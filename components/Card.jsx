import React from 'react'

const Card = ({ items, url }) => {
  return (
    <div className=' bg-slate-800 m-5 p-4 rounded-md shadow-slate-900 shadow-lg'>
        {items.map((item) => (
          <div key={item._id}><a href={`/${url}?name=${item.url}`}>{item.name}</a></div>
        ))}
      </div>
  )
}

export default Card;