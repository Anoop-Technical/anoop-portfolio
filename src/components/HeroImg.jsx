import React from 'react'
import "./HeroImgStyles.css"
import IntroImg from '../assets/intro-bg-1.jpg'
import { Link } from 'react-router-dom'

const HeroImg = () => {
  return (
    <div className='hero'>
      <div className="mask">
        <img className='into-img' src={IntroImg} alt="IntroImg" />
      </div>
      <div className="content">
        <p>HI, I'M A FULLTIME.</p>
        <h1>React Developer.</h1>
        <div className="cu_btn">
            <Link to="/Project" className='btn'>Projects</Link>
            <Link to="/Contact" className='btn btn-light'>Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default HeroImg
