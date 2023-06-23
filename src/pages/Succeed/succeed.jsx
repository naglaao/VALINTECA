import React from 'react'
import  './Succeed.css'

const succeed = () => {
  const email = localStorage.getItem('email');
  return (
    <>
    <div className='img'><img src={require('../../assets/Image Placeholder3.png')} alt='Image Placeholder3' /></div>
    <div className='head-subhead-succeed'>
      <div className='empty'></div>
      <h1 className='head-succeed'>Successfully logged in</h1>
      <h2 className='subhead-succeed'>{email}</h2>
    </div>
    
    </>
  )
}

export default succeed
