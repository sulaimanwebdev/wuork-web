import React from 'react'

const HeaderLink = (props) => {
  return (
    <>
    <a key={props.name} href={props.href} className={`text-sm font-semibold leading-6 text-gray-900 ${props.mobile === false ? "" : "-mx-3 block rounded-lg py-2 px-3 hover:bg-gray-50"}`}>
      {props.name}
    </a>
    </>
  )
}

export default HeaderLink