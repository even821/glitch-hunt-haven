import React from 'react'

const MenuItem = ({ item, slug }) => {
  return (
    <li className="my-3 mx-5 hover:cursor-pointer"><a href={"/router/" + slug}>{item}</a></li>
  )
}

export default MenuItem