import { Link } from 'react-router-dom';
import Header from '../components/templates/Header';
import Footer from '../components/templates/Footer';
import Input from '../components/atoms/Input';
import LoginButton from '../components/atoms/LoginButton';

const Login = () => {

  // Header
  const navigation = [
    { name: 'Features', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Dashboard', href: '/dashboard' },
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
            <Input
             title="Email address"
             id="email"
             type="email"
            />

            <div className='relative'>
              <a href="#" className="absolute top-0 right-0 text-sm font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
              <Input
               title="Password"
               id="password"
               type="password"
              />
            </div>

            <div>
              <LoginButton
              text="Sign in"
              />
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