import React from 'react'

const H1 = (props) => {
  return (
    <>
    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
    {props.title}
   </h1></>
  )
}

export default H1