import './App.css'
import Header from './component/Header'
import {useState,useEffect} from 'react'

function App() {
const [money, setMoney] = useState(100)
  return (
    <>
      <Header money={money}/>
    </>
  )
}

export default App
