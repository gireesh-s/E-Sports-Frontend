import React, { useState } from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Banner from './banner/Banner'
import './Contact.css'

const Contact = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const [nameErr, setNameErr] = useState({})
  const [emailErr, setEmailErr] = useState({})
  const [messageErr, setMessageErr] = useState({})

  const sendMessage = (e)=> {
    e.preventDefault();
    const isNameValid = nameValidation();
    const isEmailValid = emailValidation();
    const isMessageValid = messageValidation();
    if ( isNameValid && isEmailValid && isMessageValid ) {
      console.log({
        name,
        email,
        message
      })
    }
  }

  const nameValidation=()=>{
    const nameErr={}
    let isValid=true
    if(name===''){
        nameErr.nameRequired="Must be a valid name"
        isValid=false
    }
    setNameErr(nameErr)
    return isValid
  }

  const emailValidation=()=>{
    const emailErr={}
    let isValid=true
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email===''){
        emailErr.emailRequired="Must be a valid email"
        isValid=false
    }
    else if(!email.match(mailformat)){
        emailErr.emailInvalid="Must be a valid email"
        isValid=false
    }
    setEmailErr(emailErr)
    return isValid
  }

  const messageValidation=()=>{
    const messageErr={}
    let isValid=true
    if(message===''){
        messageErr.messageRequired="Please include a valid message"
        isValid=false
    }
    setMessageErr(messageErr)
    return isValid
  }

  return (
    <div className='contact-main-container'>
      <div className='contact-sub-container'>
        <Header/>
        <Banner/>
      </div>
      <div className='contact-sub-container-2'>
        {/* ------->>>>>>>>>>> SUCCESS <<<<<<<<<<<<<--------- */}
        <div className='contact-us-title'>Contact Us</div>
        <span className='contact-us-sub-title'>
          Leave a message below, or you can email us at solomid.net. For press inquiries, please contact <t/>
          <a href='mailto:press@solomid.net'>press@solomid.net</a>
          .
        </span>
        <form onSubmit={sendMessage} className='contact-form'>
          <div className='input-container'>
            <label className='input-label'>
              {
                Object.keys(nameErr).map((key)=> {
                  return nameErr[key]
                })
              }
              &nbsp;
            </label>
            <input placeholder='Full Name' className='name-text-field' value={name}
             onChange={
               (e) => {
                 setName(e.target.value)
                 nameValidation()
              }
             }
            />
            <label className='input-label'>
              {
                Object.keys(emailErr).map((key)=> {
                  return emailErr[key]
                })
              }
              &nbsp;
            </label>
            <input placeholder='E-mail address' className='email-text-field' value={email}
             onChange = {
               (e) => {
                 setEmail(e.target.value)
                 emailValidation()
               }
             }
            />
            <label className='input-label'>
              {
                Object.keys(messageErr).map((key)=> {
                  return messageErr[key]
                })
              }
            &nbsp;
            </label>
            <textarea placeholder='Message' rows={5} className='message-text-area' value={message}
             onChange = {
               (e) => {
                 setMessage(e.target.value)
                 messageValidation()
              }
             }/>
            <div className='submit-btn-container'>
              <div className='submit-btn--sub--container'>
                <button type='submit' className='submit-btn'>SUBMIT</button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <Footer/>
    </div>
  )
}

export default Contact