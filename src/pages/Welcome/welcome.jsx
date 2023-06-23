import React from 'react'
import './Welcome.css'
import { Link } from'react-router-dom'


const Welcome = () => {
  return (
    <>
        <div className='img'>
          <img src={require('../../assets/Image Placeholder1.png')} alt='Image Placeholder1' />
        </div>
        <section className='head-subhead-btn'>
          <section className='head-subhead-wlc-scr'>
            <h1 className='head-wlc-scr'>Welcome</h1>
            <h2 className='subhead-wlc-scr'>We’re glad you’re here! Sign up to start browsing the website.</h2>
          </section>

          <button className='btn'>
            <Link to='/signup' className='link'>
              Get Started
            </Link>
          </button>
        </section>
      </>
  )
}

export default Welcome