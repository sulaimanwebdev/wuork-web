import Header from '../templates/Header';
import Banner from '../templates/Banner';
import Hero from '../templates/Hero';
import CTA from '../templates/CTA';
import Footer from '../templates/Footer';

export default function Home() {

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
    <div className="relative bg-white">
       <Banner
        title="GeneriCon 2023"
        description="Join us in Denver from June 7 – 9 to see what’s coming next."
        buttonText="Register now"
        buttonLink="https://www.google.com/"
        />

       <Header
        navigation={navigation} 
        page="login"
       />

      <div>
        <Hero/>
      </div>
    </div>


    <CTA
    title="Boost your productivity today."
    description="Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla."
    />

    <Footer
    description="Making the world a better place through constructing elegant hierarchies."
    footerText="© 2023 Tailwind CSS. All Rights Reserved."
    footerLinks={footerLinks}
    />
    </>
  )
}