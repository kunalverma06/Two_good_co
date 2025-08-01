import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Page1 from './pages/page1'
import Page2 from './pages/page2'
import Scrollwrapper from './components/Scrollwrapper.jsx'
import Page3 from './pages/page3.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
      <div className=" " >
        <Scrollwrapper>
       <Page1 />
       <Page2 />
        <Page3 />
       </Scrollwrapper>
      </div>
  )
}

export default App
