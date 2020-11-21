import React from 'react';
import Home from "../src/container/Home";
import { useDispatch } from "react-redux";
import { homeAction } from "../src/store/actions"

export default function Index({posts}) {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(homeAction.setTopicsData(posts))
  }, []);

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
