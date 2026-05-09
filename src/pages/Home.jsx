import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import CapabilitiesSection from '../components/CapabilitiesSection'
import CtaSection from '../components/CtaSection'
import SiteFooter from '../components/SiteFooter'

function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <HeroSection />
        <CapabilitiesSection />
        <CtaSection />
      </main>
      <SiteFooter />
    </>
  )
}

export default Home
