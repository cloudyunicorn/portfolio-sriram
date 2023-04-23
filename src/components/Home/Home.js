import React from 'react'
import About from "../About/About"
import Projects from "../Projects/Projects"
import Contact from "../Contact/Contact"
import './Home.css'

export const Home = () => {
  return (
    <div className="home-div">
      <About />
      <Projects />
      <Contact />
    </div>
  )
}
