import { createClient } from "next-sanity";
import React from 'react'

const placeholder = () => {
  return (
    <div>
    </div>
  )
}

export default placeholder;

export let client =  createClient({
    projectId: '1q0xyy8m',
    dataset: 'production',
    apiVersion: '2023-02-03',
    useCdn: false,
    token: process.env.SANITY_WRITE_TOKEN
  });