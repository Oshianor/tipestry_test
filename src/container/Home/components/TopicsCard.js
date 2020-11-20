import React from "react"
import PropTypes from "prop-types"

const TopicsCard = ({ children }) => {
  return <div className="topics-card">{children}</div>
}

TopicsCard.propTypes = {
  children: PropTypes.node.isRequired,
}

export default TopicsCard
