import { Link } from 'react-router-dom';
import { useState } from 'react'
import { Bars3Icon } from '@heroicons/react/24/outline'
import DropDown from '../molecules/DropDown'
import HeaderLink from '../atoms/HeaderLink';
import HeaderMobile from '../molecules/HeaderMobile';

const Header = (props) => {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
    <header className="relative z-50 max-w-[1500px] mx-auto">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <DropDown solutions={props.solutions}/>
            {props.navigation.map((item) => (
              <HeaderLink
               name={item.name}
               href={item.href}
               mobile={false}
              />
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href={props.page === "login" ? "/login" : props.page === "registration" ? "/registration" : "/"} className="text-sm font-semibold leading-6 text-gray-900">
            {props.page === "login" ? "Log in" : props.page === "registration" ? "Register" : "Logout"} <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        <HeaderMobile
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        navigation={props.navigation}
        page={props.page}
        />
      </header>
    </>
  )
}

export default Header;