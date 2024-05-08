import Header from "./components/header"
import Main from "./components/main"
import { useState } from "react"


function App () {
  const [background, setBackground] = useState(false)
  const [screenPos, setScreenPos] = useState(0)

  const scrollPos = (e) => setScreenPos(window.scrollY)

  window.addEventListener('scroll',scrollPos)
  return(
    <div>
        <Header background = {background} setBackground = {setBackground} screenPos={screenPos}/>
        <Main  background = {background} setBacground = {setBackground} screenPos={screenPos}/>
    </div>
  )
}

export default App