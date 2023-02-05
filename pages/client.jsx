import { createClient } from "next-sanity";

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

export let client =  createClient({
    projectId: '1q0xyy8m',
    dataset: 'production',
    apiVersion: '2023-02-03',
    useCdn: false,
    token: process.env.SANITY_WRITE_TOKEN
  });