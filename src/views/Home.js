import Header from '../components/Header';
import Banner from '../components/Banner';
import Hero from '../components/Hero';

export default function Home() {

  const navigation = [
    { name: 'Features', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Company', href: '#' },
  ];

  return (
    <>
    <div className="relative bg-white">
       <Banner title="GeneriCon 2023" description="Join us in Denver from June 7 – 9 to see what’s coming next." buttonText="Register now"  buttonLink="https://www.google.com/" />
       <Header navigation={navigation} />
      <div>
        <Hero/>
      </div>
    </div>
    </>
  )
}