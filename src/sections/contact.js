import React, { useState } from 'react'
import styled from 'styled-components/macro'
import Button from '../components/Button'

const Wrapper = styled.section`
  width: 100%;
  /* height: 450px; */
  display: flex;
  justify-content: center;
  margin: 2rem 0 4rem;

  @media screen and (min-width: 740px) {
    height: 480px;
  }
  
  .contact {
    width: 95%;
    background: #252525;
    border-radius: 10px;
    border: 0.25rem ridge #e3e4e3;

    &-heading {
      font-size: 3rem;
      background: -webkit-linear-gradient(#ffae00, #e3e4e3);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      text-align: center;

      padding: 1rem;

      @media screen and (max-width: 440px) {
        font-size: 2rem;
      }
    }

    &-details {
      display: flex;
      justify-content: center;
      align-items: center;
      column-gap: 10rem;

      @media screen and (max-width: 740px){
        flex-direction: column;

      }
    }

    &-form {
      padding: 2rem;
      padding-bottom: 0;
    }
    &-field {
      border-bottom: 1px solid ;
      margin-bottom: 1rem;
    }
    &-input {
      background: transparent;
      color: #e3e4e3;
      font-size: 1rem;
      resize: none;
      margin-bottom: 1rem;
    }
    &-link {
      text-decoration: none;
    }
    &-socials {
      display: flex;
      padding: 1rem;
      padding-bottom: 2rem;
      color: #e3e4e3;
      flex-wrap: wrap;
      justify-content: center;
      @media screen and (min-width: 740px){
        flex-direction: column;
      }
    }
    &-profile {
      padding: 1rem;
      display: flex;

      &-link {
        text-decoration: none;
        color: #e3e4e3;
        margin-left: 0.5rem;
      }
    }
  }
`

const Contact = () => {
  const [name, setName] = useState('')
  const [query, setQuery] = useState('')
  const disabled = !(Boolean(name && query))
  const label = disabled ? 'Fill Details' : 'Send Mail'

  return (
    <Wrapper id='contact'>
      <div className="contact">
        <h1 className="contact-heading">Contact Us</h1>
        <div className="contact-details">
          <form className="contact-form">
            <div className="contact-field">
              <input placeholder='Enter Your Name' className='contact-input' type="text" value={name}
              onChange={e => setName(e.target.value)}
              />
            </div>
            <div className="contact-field"
            style={{
              marginBottom: '3rem'
            }}
            >
              <textarea placeholder='What do you want to ask?' className='contact-input' cols="30" rows="5" 
              onChange={e => setQuery(e.target.value)}
              ></textarea>
            </div>
            {disabled || <Button as='a' className='contact-link'
              href={`mailto:electroz2k22@gmail.com?subject=${name}&body=${query}`}
              >
                {label}
            </Button>}
          </form>
          <div className="contact-socials">
            <div>
            <div className='contact-profile'>
              <span>
                <img src="/instagram.svg" alt="Instagram" />
              </span>
              <a rel="noreferrer" target='_blank' href='https://instagram.com/electroz_2k22?igshid=YmMyMTA2M2Y=' className='contact-profile-link'>electroz_2k22</a>
            </div>
            <div className='contact-profile'>
              <span>
                <img src="/chrome.svg" alt="Chrome" />
              </span>
              <a rel="noreferrer" target='_blank' href='http://www.gcetj.edu.in/' className='contact-profile-link'>GCE Thanjavur</a>
            </div>
            <div className='contact-profile'>
              <span>
                <img src="/cell.svg" alt="+919944648268" />
              </span>
              <a rel="noreferrer" target='_blank' href='tel:+919944648268' className='contact-profile-link'>S. Nandhakumar</a>
            </div>
            <div className='contact-profile'>
              <span>
                <img src="/cell.svg" alt="+916382409878" />
              </span>
              <a rel="noreferrer" target='_blank' href='tel:+916382409878' className='contact-profile-link'>M. Balakrishnan</a>
            </div>
            <div className='contact-profile'>
              <span>
                <img src="/cell.svg" alt="+919442721368" />
              </span>
              <a rel="noreferrer" target='_blank' href='tel:+918523997733' className='contact-profile-link'>V.S. Vedhika</a>
            </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default Contact