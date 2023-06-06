import React from 'react'

const Input = (props) => {
  return (
    <>
    <div>
     <label htmlFor={props.id} className="block text-sm font-medium leading-6 text-gray-900">
      {props.title}
      </label>
      <div className="mt-2">
        <input
          id={props.id}
          name={props.id}
          type={props.type}
          required
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-ins  ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-6  sm:text-sm sm:leading-6"
        />
      </div>
  </div>
    </>
  )
}

export default Input