import React from 'react'
import styled from 'styled-components/macro'

import Profile from '../components/Profile'
import Others from '../components/Others'
import { IntroItems, IntroOthers } from '../lib/introItems'
import Rotate from 'react-reveal/Rotate';
import { Fade } from 'react-reveal'

const Wrapper = styled.section`
  .intro {
    &-heading {
      font-size: 3rem;
      padding: 1rem;
      background: -webkit-linear-gradient(#ffae00, #a38e5d);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      text-align: center;
      margin-top: 2rem;

      @media screen and (max-width: 440px) {
        font-size: 2rem;
      }
    }
    &-container, &-co-wrapper {
      display: grid;
      grid-template-columns: auto;
      justify-content: center;
      @media screen and (min-width: 540px) {
        grid-template-columns: auto auto;
      }
      @media screen and (min-width: 810px) {
        grid-template-columns: auto auto auto;
        column-gap: 2rem;
      }
    }
    &-coordinators {
      display: flex;
      width: 100%;
      justify-content: center;
      align-items: center;
    }
    &-co-wrapper {
      width: 90%;
      padding: 1rem;
    }

  }
`

const Intro = () => {
  return (
    <Wrapper id='intro'>
      <h1 className="intro-heading">Pillers Of Electroz</h1>
      <div className="intro-container">
        {IntroItems.map(item => (
          <Rotate key={item.id} top left>
            <a href={item.ref} 
            rel="noreferrer"
            target="_blank"><Profile 
            name={item.name}
            src={item.src}
            position={item.position}
            /></a>
          </Rotate>
        ))}
      </div>
      <div className="intro-coordinators">
        {console.log(IntroOthers)}
        <div className="intro-co-wrapper">
        {IntroOthers.map(item => (
          <Fade>
          <a href={item.ref} 
          rel="noreferrer"
          className={item.id}target="_blank"><Others key={item.id} 
          name={item.name}
          position={item.position}
          src={item.src}
          /></a>
          </Fade>
        ))}
        </div>
      </div>
    </Wrapper>  )
}

export default Intro