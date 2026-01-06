
import './App.css'
import Navbar from './Components/Navbar'
import DIDwallet from './Components/DIDwallet'
import Network from './Components/network'
import ExperienceWeb from './Components/ExperienceWeb'
import Footer from './Components/footer'
import { createContext, useState } from 'react'

export const ThemeContext = createContext();

function App() {

  const [themetoggle, setThemeToggle] = useState("dark")

  return (
    <>
    <div className={`lg:pt-[106px] pt-[90px] ${themetoggle === "dark" ? "bg-[black]" : "bg-[white]" }`}>
    <ThemeContext value={{themetoggle, setThemeToggle}}>
      <Navbar />
      <DIDwallet />
      <Network />
      <ExperienceWeb />
      <Footer />
    </ThemeContext>
    </div>
    </>
  )
}

export default App
