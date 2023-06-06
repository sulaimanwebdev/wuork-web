import React from 'react'

const FooterLink = (props) => {
  return (
    <>
    <li key={props.index} className="text-gray-600 text-[15px] font-medium mb-4">
       <a href={props.url} className="hover:underline">{props.name}</a>
    </li>
    </>
  )
}

export default FooterLink