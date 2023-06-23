import React from 'react'
import './SignUp.css'
import Form from '../../components/Form'


const SignUp = () => {
  return (
    <>
    
        <div className='img'><img src={require('../../assets/Image Placeholder2.png')} alt='Image Placeholder2' /></div>

          <section className='head-subhead-form'>
            <section className='head-subhead-sign-up'>
                <h1 className='head-sign-up'>Create Account</h1>
                <h2 className='subhead-sign-up'>Go ahead and sign up, let everyone know how awesome you are!</h2>
            </section>
            
            <Form/>
          </section>
          </>
  )
}

export default SignUp
