import { createClient } from "next-sanity";

export default createClient({
    projectId: '1q0xyy8m',
    dataset: 'production',
    apiVersion: '2023-02-03',
    useCdn: false,
    token: process.env.SANITY_WRITE_TOKEN
  });