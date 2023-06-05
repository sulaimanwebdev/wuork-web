
const SecondaryButton = (props) => {
  return (
    <>
    <a href={props.link} className={`${props.color} text-sm font-semibold leading-6`}>
      {props.text} <span aria-hidden="true">→</span>
    </a>
    </>
  )
}

export default SecondaryButton