import React, { useState } from 'react';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client'
import './Footer.scss';

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message,
    }

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
  }
  
  return (
    <>
      <h2 className='head-text' style={{ textTransform: 'lowercase' }}>Złap za kubek <span>z kawą</span><br /> i porozmawiaj<span> ze mną!</span></h2>
      <div className='app__footer-cards'>
        <div className='app__footer-card'>
          <img src={images.email} alt='email' />
          <a href='mailto:cichowicz.dom@gmail.com' className='p-text'>Napisz do mnie!</a>
        </div>
        <div className='app__footer-card'>
          <img src={images.mobile} alt='mobile' />
          <a href='tel: +48 884 676 669' className='p-text'>Zadzwoń do mnie!</a>
        </div>
      </div>

    {!isFormSubmitted ?
      <div className='app__footer-form app__flex'>
        <div className='app__flex'>
          <input 
            className='p-text' 
            type='text'
            placeholder='Twoje imię'
            value={name}
            name='name'
            onChange={handleChangeInput}
          />
        </div>
        <div className='app__flex'>
          <input 
            className='p-text' 
            type='email'
            placeholder='Twój email'
            value={email}
            name='email'
            onChange={handleChangeInput}
          />
        </div>
        <div>
          <textarea
            className='p-text'
            placeholder='Twoja wiadomość'
            value={message}
            name='message'
            onChange={handleChangeInput}
          />
        </div>
        <button
          type='button'
          className='p-text'
          onClick={handleSubmit}
        >{ loading ? 'Wysyłam' : 'Wyślij wiadomość' }</button>
      </div>
      : <div>
          <h3 className='head-text'>dziękuję za kontakt!</h3>
        </div>}
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'kontakt',
  'app__primarybg'
)