import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
 
  function Header(){
    return(
      <>
    <h1>Header</h1>
      </>
    )
  }

  function Body(){
    return(
    <>
      <body></body>
      </>
    )
  }

  return (
    <>
      <Header/>
    </>
  )
}

export default App
