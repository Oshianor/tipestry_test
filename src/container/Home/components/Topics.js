import React from "react"
import TopicsCard from "./TopicsCard"

export async function getStaticProps() {
  const api_data = {
    base_url: "https://tipestry.com/api/",
    query: {
      topic: `${base_url}/topic`,
      topicId: `${topic}/:topicId`,
      comment: `${topic}/comment/:tpoicId`,
    },
  }
  const response = await fetch(api_data.query.topic)
  const posts = await response.json()

  console.log(posts)

  return {
    props: {
      posts,
    },
  }
}

const Topics = ({ posts }) => {
  return (
    <div className="topics">
      {posts && posts.map(topics => {
        return <TopicsCard key={topics.id}>{topics}</TopicsCard>
      })}
    </div>
  )
}

export default Topics
