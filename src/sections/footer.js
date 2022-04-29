import React from 'react'
import styled from 'styled-components/macro'

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 2rem 0;
  background: rgb(2,0,36);
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,53,121,1) 35%, rgba(0,212,255,1) 100%);

  .footer {
    position: relative;
    &-img {
      width: 90%;
      height: 500px;
      background: url('/gcetj.jpeg');
      background-size: cover;
      background-repeat: no-repeat;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      border-radius: 0.5rem;
    }
    &-map {
      margin-right: 1rem;
      z-index: 30;
    }

    &-loading {
      color: #000;
      background-color: #e3e4e3;
      padding: 0.5rem 1rem;
      border-radius: 50px;
      position: absolute;
      right: 100px;
      border: 2px solid #000;
    }
    &-credits {
      position: absolute;
      bottom: 5px;
      color: #f5af2c;
    }
  }
`

const Footer = () => {
  return (
    <Wrapper id='footer'>
      <div className='footer-img'>
        <div className='footer-loading'>Loading ...</div>
        <iframe title='location' className='footer-map' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7841.038281403698!2d78.976928!3d10.694383!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd9db9258a78f83d4!2sGovernment%20College%20Of%20Engineering%2CSengipatti%2CThanjavur!5e0!3m2!1sen!2sin!4v1650849806329!5m2!1sen!2sin" width="250" height="250" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <pre className='footer-credits'>Made with  &#10084;&#65039;  by   <a href="https://www.linkedin.com/in/jayeshsugumaran"
      style={{
        textDecoration: 'underline'
      }}
      >Jayesh Sugumaran</a></pre>
    </Wrapper>
  )
}

export default Footer