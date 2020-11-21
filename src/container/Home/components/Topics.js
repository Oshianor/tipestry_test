import React from "react"

const Topics = ({ posts }) => {
  return (
    <div className="topics">
      {posts && posts.map(post => {
          console.log(posts)
          return <p>title: {post.topics[0].title}</p>
        })}
    </div>
  )
}


export default Topics
