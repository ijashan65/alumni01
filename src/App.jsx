import { useState } from 'react'
import './App.css'
import NavBar from './components/navBar/NavBar'
import SideBar from './components/sideBar/SideBar'
import Mainsection from './components/mainSection/MainSection'

function App() {
  const [count, setCount] = useState(0)

  return (
 <>
 <div className="mainContainer">
  <NavBar />
  <div className="mainsectionContentContainer">
    <SideBar />
    <Mainsection />
     
  </div>

  </div>

 </>
  )
}

export default App
