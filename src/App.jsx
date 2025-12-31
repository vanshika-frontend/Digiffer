
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import DIDwallet from './Components/DIDwallet'
import Network from './Components/network'
import ExperienceWeb from './Components/ExperienceWeb'
import Footer from './Components/footer'

function App() {

  return (
    <>
    <Navbar />
    <DIDwallet />
    <Network />
    <ExperienceWeb />
    <Footer />
    </>
  )
}

export default App
