
const RegisterButton = (props) => {
  return (
    <>
<a
          href={props.buttonLink}
          className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
        >
          {props.buttonText} <span aria-hidden="true">&rarr;</span>
        </a>
    </>
  )
}

export default RegisterButton