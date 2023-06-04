import Header from '../components/Header';
import Banner from '../components/Banner';
import Hero from '../components/Hero';

export default function Home() {

  return (
    <>
    <Banner/>
    <div className="relative bg-white">
      <Header/>
      <div>
        <Hero/>
      </div>
    </div>
    </>
  )
}
