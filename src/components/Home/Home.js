import React from 'react'
import About from "../About/About"
import Projects from "../Projects/Projects"
import Contact from "../Contact/Contact"
import { Resume } from "../../Resume/Resume"

export const Home = () => {
  return (
    <div>
      <About />
      <Projects />
      {/* <Resume /> */}
      <Contact />
    </div>
  )
}
