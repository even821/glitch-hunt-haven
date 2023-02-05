import React from 'react'
import MenuItem from './MenuItem'
import Profilepic from './Profilepic';

const Menu = () => {

  return (
    <div className=" bg-slate-900 text-white grid grid-cols-2 shadow-lg shadow-black">
      <ul className="flex py-4">
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