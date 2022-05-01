import React from 'react'
import styled from 'styled-components/macro'
import Button from '../components/Button'
import Header from '../components/Header'
import Main from '../components/Main'
// import CashPrize from '../components/cashPrize'

const Wrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  background: rgb(2,0,36) url('/bg-electroz.jpeg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  .hero {
    &-register {
      display: flex;
      justify-content: center;
      padding: 2rem;
    }
  }
`

const Hero = () => {
  return (
    <Wrapper id='hero'>
      <div className="hero-cover">
        <Header />
        <Main />
        {/* <CashPrize 
        /> */}
        <div className='hero-register'>
        <a href='https://forms.gle/v7Jdw7oc8qL2mQZw6'><Button>Register Now</Button></a>
        </div>
      </div>
    </Wrapper>
  )
}

export default Hero