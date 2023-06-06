import React from 'react'

const HeroParagraph = (props) => {
  return (
    <>
    <p className="mt-6 text-lg leading-8 text-gray-600">
      {props.title}
    </p>
    </>
  )
}

export default HeroParagraph