
const Button = (props) => {
  return (
    <>
     <a
     href={props.link}
     className={`${props.color} rounded-md px-3.5 py-2.5 text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset`}
     >
     {props.text}
    </a>
    </>
  )
}

export default Button