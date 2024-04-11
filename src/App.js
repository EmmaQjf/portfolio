import { useState, useEffect } from 'react'
import styles from './App.module.scss'
import NavBar from './components/NavBar/NavBar'
import Header from './components/Header/Header'
import ProjectSection from './components/ProjectSection.js/ProjectSection'
import AboutMe from './components/AboutMe/AboutMe'
import ContactMe from './components/ContactMe/ContactMe'
import SocialMedia from './components/SocialMedia/SocialMedia'
import Skills from './components/Skills/Skills'


export default function App(){
    
    return(
        <>
           <NavBar />
           <div id='AboutMe'><AboutMe /></div>
           <Header />
           <Skills />
           <div id='ProjectSection'><ProjectSection /></div>
           <div id='ContactMe'><ContactMe /></div>
           <SocialMedia/>
        </>
    )
}