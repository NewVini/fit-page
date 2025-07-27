import { Suspense } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import ThreeD from './components/ThreeD'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Hero />
        <About />
        <Services />
        <ThreeD />
        <Testimonials />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  )
}

export default App 