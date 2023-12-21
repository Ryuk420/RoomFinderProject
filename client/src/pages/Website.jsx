import React from 'react'
import Hero from "../components/Hero/Hero";
import Residencies from "../components/Residencies/Residencies";



const Website = () => {
  return (
    <div className="App">
    <div>
      <div className="white-gradient" />
      <Hero />
    </div>
    <Residencies/>
  </div>
  )
}

export default Website