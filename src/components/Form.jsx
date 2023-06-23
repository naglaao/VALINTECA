import React, { useEffect, useState } from 'react'
import './Form.css';






const USER_REGEX = /^[a-zA-Z]*[0-9]*[a-z]{5,15}$/;
const PWD_REGEX = /^(?=.*[\d])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,24}$/;
const EMA_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;


export default function SignUp() {

  

  const [user, setUser] = useState('');
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);
   
   
    const [email,setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);
    
    const [errMsg, setErrMsg] = useState('');
   


  useEffect(() => {
      setValidName(USER_REGEX.test(user));
  }, [user])
  
  useEffect(() => {
      setValidEmail(EMA_REGEX.test(email));
  }, [user,email])

  useEffect(() => {
      setValidPwd(PWD_REGEX.test(pwd));
      setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd])

  useEffect(() => {
      setErrMsg('');
  }, [user,email, pwd, matchPwd])


 
  
  async function handleSubmit(e) {
    e.preventDefault();
    const v1 = USER_REGEX.test(user);
    const v2 = PWD_REGEX.test(pwd);
    const v3 = EMA_REGEX.test(email);
    if (!v1 || !v2|| !v3) {
      setErrMsg("Invalid Entry");
      return;
    } 
    try{ 
          const userData = { username:user ,email:email, password:pwd, password_confirmation: matchPwd,}
             await fetch('https://goldblv.com/api/hiring/tasks/register', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
              })
              .then((res) => {
                if (res.status === 200) {
                  localStorage.setItem('email', userData.email)
                  window.location.href='/Succeed'
                  return res;
                } else {
                  throw new Error()
                }
                })
                
            
          }
          catch(error) {
            console.error('Error:', error)
          }

}

  
  return( 
    
        <form onSubmit={handleSubmit}>
            <section className='form-items'>
              <div>
                <div className='form-item'>
                  <div className='icons'>
                    <img src={require('../assets/User.png')} alt='user-logo' />
                    <img src={require('../assets/Divider.png')} alt='divider' />
                  </div>
                  <input  
                    type="text"
                    id="username"
                    autoComplete="off"
                    onChange={(e) => setUser(e.target.value)}
                    value={user}
                    required
                    aria-invalid={validName ? "false" : "true"}
                    onFocus={() => setUserFocus(true)}
                    onBlur={() => setUserFocus(false)}
                  />
              </div>

              {userFocus && user && !validName && (
              <span className='err-message'>5 to 15 characters. Must begin with a letter, Letters, numbers allowed ,with no
              numbers at the beginning or the end.</span>)}
              </div>
              

              <div>
                <div className='form-item'>
                  <div className='icons'>
                     <img src={require('../assets/EnvelopeSimple.png')} alt='email-logo' />
                    <img src={require('../assets/Divider.png')} alt='divider' /> 
                  </div>
                  <input 
                    type="email"
                    id="email"
                    autoComplete="off"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                    aria-invalid={validEmail ? "false" : "true"}
                    onFocus={() => setEmailFocus(true)}
                    onBlur={() => setEmailFocus(false)}
                />
                 </div>
                {emailFocus && email && !validEmail &&(
                <span className='err-message' >Email is not valid! Please enter a correct email address</span>)
                }

              </div>
              

              <div>
                <div className='form-item'>
                  <div className='icons'>
                  <img src={require('../assets/LockKey.png')} alt='password-logo' />
                    <img src={require('../assets/Divider.png')} alt='divider' />
                  </div>
                  <input 
                    type="password"
                    id="password"
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                    required
                    aria-invalid={validPwd ? "false" : "true"}
                    aria-describedby="pwdnote"
                    onFocus={() => setPwdFocus(true)}
                    onBlur={() => setPwdFocus(false)}
                />
                </div>

                {pwdFocus && pwd && !validPwd &&(<span className='err-message'>
                  Password cannot have less than eight characters Must be numbers and special characters !
                  </span>)
                 }
              </div>

              <div>
                <div className='form-item'>
                  <div className='icons'>
                  <img src={require('../assets/LockKey.png')} alt='password-logo' />
                    <img src={require('../assets/Divider.png')} alt='divider' />
                  </div>
                  <input 
                    type="password"
                    id="confirm_pwd"
                    onChange={(e) => setMatchPwd(e.target.value)}
                    value={matchPwd}
                    required
                    aria-invalid={validMatch ? "false" : "true"}
                    aria-describedby="confirmnote"
                    onFocus={() => setMatchFocus(true)}
                    onBlur={() => setMatchFocus(false)}
                />
                </div>

                {matchFocus && !validMatch && (<span className='err-message'>
                  Confirmation of the passwords doesnot match, please try again
                  </span>)
                }
              </div>
            </section>

            <input type='submit' 
              className='btn'
              value='Create Account'/>
        </form>
    );
}



