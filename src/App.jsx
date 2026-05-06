import './App.css'
import Footer from './components/layouts/Footer'
import Testimonials from './components/sections/Testimonials'
import Whitepaceend from './components/sections/Whitespaceend'
import Hero from './components/sections/Hero'
import Project from './components/sections/Projects'
import WorkTogether from './components/sections/WorkTogether'
import Extension from './components/sections/Extension'
import Customize from './components/sections/Customize'
import Pricing from './components/sections/Pricing'
import CTA from './components/sections/CTA'
import Data from './components/sections/Data'
import Navbar from './components/layouts/Navbar'
import Work from './components/sections/Work'
import Sponsors from './components/sections/sponsors'
 
function App() {
 
  return (
    <>
      <Navbar />
      <Hero />
       <Project />
      <WorkTogether />
      <Extension />
      <Customize />
      <Pricing />
      <CTA />
      <Data />
      <Sponsors/>
      <Work/>
      <Testimonials/>
      <Whitepaceend/>
      <Footer/>
    </>
  )
}
 
export default App