import React from 'react';
import { AiFillLinkedin, AiFillGithub  } from 'react-icons/ai';


const SocialMedia = () => {
  return (
    <div className='app__social'>
      <a 
        href='https://www.linkedin.com/in/damian-cichowicz' 
        target="_blank"
        rel="noreferrer noopener"
      >
        <div>
          <AiFillLinkedin />
        </div>
      </a>
      <a 
          href='https://github.com/XIIIDCX'
          target="_blank"
          rel="noreferrer noopener"
          >
        <div>        
          <AiFillGithub />
        </div>
      </a>
    </div>
  )
}

export default SocialMedia