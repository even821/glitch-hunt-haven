import React from 'react'

const MenuItem = ({ item, slug }) => {
  return (
    <a href={"/router/" + slug} className=""><li className="my-3 hover:cursor-pointer">{item}</li></a>
  )
}

export default MenuItem