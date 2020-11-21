import React from 'react';
import Home from "../src/container/Home"




export default function Index({posts}) {
 
  console.log(posts)
  return <Home />
}


export async function getStaticProps() {
  const response = await fetch("https://tipestry.com/api/topic")
  const posts = await response.json()

  
  return {
    props: {
      posts,
    },
  }
}
