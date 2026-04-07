import { Hero } from './components/Hero'
import { Roles } from './components/Roles'
import { Links } from './components/Links'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-300">
      <Hero />
      <Roles />
      <Links />
      <Footer />
    </div>
  )
}

export default App
