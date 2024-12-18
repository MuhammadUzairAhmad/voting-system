import React from 'react'
import "./circle.css";

const CircleLoader = () => {
  return (
    <div>
      <svg viewBox="25 25 50 50" className="circle-loader">
      <circle r="20" cy="50" cx="50" />
    </svg>
    </div>
  )
}

export default CircleLoader
