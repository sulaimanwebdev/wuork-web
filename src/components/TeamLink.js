
const TeamLink = (props) => {
  return (
    <>
    {props.teams.map((team) => (
      <li key={team.name}>
        <a
          href={team.href}
          className={props.classNames(
            team.current
              ? 'bg-gray-800 text-white'
              : 'text-gray-400 hover:text-white hover:bg-gray-800',
            'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
          )}
        >
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white">
            {team.initial}
          </span>
          <span className="truncate">{team.name}</span>
        </a>
      </li>
    ))}
    </>
  )
}

export default TeamLink