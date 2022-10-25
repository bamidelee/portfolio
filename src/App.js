import Header from "./components/header"
import Main from "./components/main"
import {useState} from 'react'
function App () {
  const [background, setBackground] = useState(false)

  return(
    <div style={{backgroundColor: background?'white':'black'}}>
        <Header background = {background} setBackground = {setBackground}/>
        <Main  background = {background} setBacground = {setBackground}/>
    </div>
  )
}

export default App