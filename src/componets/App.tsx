import { useState } from 'react'
import Home from '../Pages/Home'
import ScrollableTabs from './ScrollableTabs'
import TowBtn from './EX/TowBtn'
import LocalStotageManagement from './EX/LocalStotageManagement'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home/>
      {/* <TowBtn/>
      <LocalStotageManagement/> */}
    </>
  )
}

export default App
