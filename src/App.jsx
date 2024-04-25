// import { useState } from "react"

import PersonalInfo from "./components/PersonalInfo"
import Plan from "./components/Plan";
import AddOns from "./components/AddOns";

import { useContext, useEffect, useState} from "react"
import { StepContext } from "./context/StepContext"
import Summary from "./components/Sumary";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

export default function App() {

  const { step } = useContext(StepContext)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(()=>{
    function resize(){
      setWindowWidth(window.innerWidth)
    }
    resize()
    window.addEventListener('resize', resize)
    return () => window.removeEventListener('resize', resize)
  }, [])

  let renderTarget

  switch (step) {
    case 1:
      renderTarget =  <PersonalInfo />
      break
    case 2:
      renderTarget =  <Plan />
      break
    case 3:
      renderTarget = <AddOns />
      break
    case 4:
      renderTarget =  <Summary />
      break
    default:
      renderTarget = <></>
    break
  }

  return (
    <main className="card">
      <Sidebar />
      {renderTarget}
      {windowWidth >= 1024 && <Footer display={'desktop'}/>}
    </main>
  )
}