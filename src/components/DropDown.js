import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

export default function DropDown(props) {
  return (
    <Popover className="relative outline-none">
      <Popover.Button className="inline-flex outline-none items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
        <span>Solutions</span>
        <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute -left-5 lg:left-1/2 z-10 mt-5 flex w-screen max-w-max lg:-translate-x-1/2 px-4">
          <div className="w-screen max-w-[200px] flex-auto overflow-hidden rounded-xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
            <div className="flex flex-col gap-4 px-5 py-3">
              {
                props.solutions.map((ele)=> {
                  return(
                    <a href={ele.href} className='font-[500]'>{ele.name}</a>
                  )
                })
              }
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
