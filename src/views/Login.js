import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Login = () => {

  // Header
  const navigation = [
    { name: 'Features', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Dashboard', href: '/dashboard' },
  ];

  // dropdown
  const solutions = [
    { name: 'Analytics', href: '#'},
    { name: 'Engagment', href: '#'},
    { name: 'Security', href: '#'},
    { name: 'Integrations', href: '#'},
    { name: 'Automations', href: '#'},
    { name: 'Reports', href: '#'},
  ];


  // footer
 let footerLinks = [
  {
    title: "SOLUTIONS",
    links: [
      { name: "Marketing", url: "#" },
      { name: "Analytics", url: "#" },
      { name: "Commerce", url: "#" },
      { name: "Insights", url: "#" },
    ]
  },

  {
    title: "SUPPORT",
    links: [
      { name: "Marketing", url: "#" },
      { name: "Pricing", url: "#" },
      { name: "Documentation", url: "#" },
      { name: "Guides", url: "#" },
      { name: "API Status", url: "#" },
    ]
  },

  {
    title: "COMPANY",
    links: [
      { name: "About", url: "#" },
      { name: "Blog", url: "#" },
      { name: "Jobs", url: "#" },
      { name: "Press", url: "#" },
      { name: "Partner", url: "#" },
    ]
  },

  {
    title: "LEGAL",
    links: [
      { name: "Claim", url: "#" },
      { name: "Privacy", url: "#" },
      { name: "Terms", url: "#" },
    ]
  },

 ];


  return (
    <>
    <Header 
    navigation={navigation} 
    solutions={solutions}
    page="registration"
    />
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-8 md:py-20 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{' '}
            <Link to="/registration" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Create Account
            </Link>
          </p>
        </div>
      </div>
    <Footer
    description="Making the world a better place through constructing elegant hierarchies."
    footerText="© 2023 Tailwind CSS. All Rights Reserved."
    footerLinks={footerLinks}
    />
    </>
  )
}

export default Login