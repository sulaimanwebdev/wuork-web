import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import HeaderLink from '../atoms/HeaderLink';
import DropDown from './DropDown'

const HeaderMobile = (props) => {
  return (
    <>
    <Dialog as="div" className="lg:hidden" open={props.mobileMenuOpen} onClose={props.setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => props.setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <DropDown solutions={props.solutions}/>
                  {props.navigation.map((item) => (
                    <HeaderLink
                    name={item.name}
                    href={item.href}
                    mobile={true}
                   />
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href={props.page === "login" ? "/login" : props.page === "registration" ? "/registration" : "/"}
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {props.page === "login" ? "Log in" : props.page === "registration" ? "Register" : "Logout"}
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
    </>
  )
}

export default HeaderMobile