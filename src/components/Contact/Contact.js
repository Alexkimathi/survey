import React from 'react'
import './contact.css'
import { AiFillPhone } from "react-icons/ai";
import { MdAttachEmail } from "react-icons/md";
const Contact = () => {
  const [formStatus, setFormStatus] = React.useState('Send')
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const { name, email, message } = e.target.elements
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    }
    console.log(conFom)
  }
  return (
    <div className='contact'>
        <div className='dets'>
            <h1>Get in Touch with us</h1>
            <div className="footer__socialss">
                <a>
                  <AiFillPhone /> <span>0712345678</span>
                </a>
                <a>
                  <MdAttachEmail /> <span>piontmap@gmail.com</span>
                </a>
             
              </div>
        </div>
    <div className="container mt-1">
     
      <form onSubmit={onSubmit}>
      <h2 className="mb-2">Contact us</h2>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input className="form-control" type="text" id="name" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email" id="email" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea className="form-control" id="message" required />
        </div>
        <button className="btn btn-danger" type="submit">
          {formStatus}
        </button>
       
      </form>
      
    </div>
    </div>
  )
}
export default Contact