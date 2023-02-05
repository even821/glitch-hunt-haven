import React from 'react'

const pill = ({link, text, color}) => {
  return (
    <div className={` inline ${color} text-white p-[6px] rounded-lg font-semibold mr-2 shadow-black shadow-inner`}>
        <a href={link}>
            {text}
        </a>
    </div>
  )
}

export default pill