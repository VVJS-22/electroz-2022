import React from 'react'
import styled from 'styled-components/macro'

import Hero from '../sections/hero'
import Intro from '../sections/intro'
import Tech from '../sections/tech'
import NonTech from '../sections/non-tech'
import Contact from '../sections/contact'
import Footer from '../sections/footer'

import Zoom from 'react-reveal/Zoom';
import Roll from 'react-reveal/Roll'

const Wrapper = styled.main`
  height: 100%;
`

const home = () => {
  return (
    <Wrapper>
        <Hero />
        <Intro />
        <Tech />
        <NonTech />
        <Zoom left>
          <Contact />
        </Zoom>
        <Roll right>
          <Footer />
        </Roll>
    </Wrapper>
  )
}

export default home