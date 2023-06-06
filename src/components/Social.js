import React from 'react'

const Social = (props) => {
  return (
    <>
    <a href={props.link} className="text-gray-500">
      {props.icon}
      <span className="sr-only">{props.title}</span>
    </a>
    </>
  )
}

export default Social