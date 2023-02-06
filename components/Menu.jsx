import React from 'react'
import MenuItem from './MenuItem'

const Menu = () => {

  return (
    <div className=" bg-slate-900 text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 shadow-lg shadow-black pl-2">
      <ul className="grid grid-cols-1 sm:grid-cols-5 py-4 justify-items-center">
        <li>
          <a href="../" className=' font-extrabold text-4xl text-white'><span className=' text-blue-600'>G</span>HH</a>
        </li>
        <MenuItem item="Hunters" slug="hunter"></MenuItem>
        <MenuItem item="Games" slug="game"></MenuItem>
        <MenuItem item="Techs" slug="tech"></MenuItem>
        <MenuItem item="Strats" slug="strat"></MenuItem>
        
      </ul>
      
      <div className=' grid justify-items-end pr-10'>
          
      </div>
    </div>
  )
}

export default Menu