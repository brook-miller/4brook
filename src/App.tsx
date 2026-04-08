import { Hero } from './components/Hero'
import { Roles } from './components/Roles'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-300">
      <Hero />
      <Roles />
      <Footer />
    </div>
  )
}

export default App
