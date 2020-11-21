import React from "react";
import { useSelector } from "react-redux"

const Topics = () => {
  const { topics, page, total } = useSelector(({ home }) => home);

  console.log("topics, page, total", topics, page, total)

  return (
    <div className="topics">
      {topics &&
        topics.map(post => {
          return <p key={post._id} >title: {post.title}</p>
        })}
    </div>
  )
}


export default Topics
