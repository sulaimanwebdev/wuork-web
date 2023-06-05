
const SidebarLink = (props) => {
  return (
    <>
    {props.navigation.map((item) => (
     <li key={item.name}>
       <a
         href={item.href}
         className={props.classNames(
           item.current
             ? 'bg-gray-800 text-white'
             : 'text-gray-400 hover:text-white hover:bg-gray-800',
           'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
         )}
       >
         <item.icon className="h-6 w-6 shrink-0" aria-hidden="true" />
         {item.name}
       </a>
     </li>
    ))}
    </>
  )
}

export default SidebarLink