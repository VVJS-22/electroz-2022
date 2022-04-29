import React from 'react'
import TechCard from '../components/TechCard'
import styled from 'styled-components/macro'
import Fade from 'react-reveal/Fade'


const Wrapper = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;

  .tech {
    &-heading {
      font-size: 3rem;
      padding: 1rem;
      background: -webkit-linear-gradient(#ffae00, #a38e5d);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;

      @media screen and (max-width: 440px) {
        font-size: 2rem;
      }
    }
  }
`

const Tech = () => {
  return (
    <Wrapper id='tech'>
      <h1 className='tech-heading'>Technical Events</h1>
      <div className="tech-events">
        <Fade left>
          <TechCard 
          flex='row' 
          title='Paper Presentation'
          desc='Paper presentation is a Technical Event where each participant is required to make a
          paper about a given topic and then present it in front of the juries.A Team can have maximum of 2 participants.
          No participants can be part of more than one team.
          It is not necessary that the participants forming a team should be from the same
          college.'
          pdf='/techpp.pdf'
          cover='/ppt.jpeg'
          />
        </Fade>
        <Fade right>
        <TechCard 
          flex='row-reverse' 
          title='Technical Quiz'
          desc='Technical quiz is an Technical Event.A Quiz is a game which can also be called a mind
          sport.wherein the players,either as individual attempt to answer question posed to themcorrectly ,in order to win a prize .'
          pdf='/tech-quiz.pdf'
          cover='/tech-quiz.jpg'
          />
        </Fade>
        <Fade left>
        <TechCard 
          flex='row' 
          title='Project Expo'
          desc='Project expo is a technical event where each candidate is required to present the project in the basis of the engineering steam and present in front of judges. A team can have up to 2 to 4 participants.
          No more participants can be part of more than one team.
          Once registered that the participants forming a team should be from the same college.'
          pdf='/tech-expo.pdf'
          cover='/expo.jpeg'
          />
        </Fade>
        <Fade right>
        <TechCard 
          flex='row-reverse' 
          title='Connectricals'
          desc='Connectricals is a Technical Event in which players attempt to complete a specific type
          of connection with their images connectricals has simple rules but complex strategies. A Team can have maximum of 3 participants.
          No participants can be part of more than one team.
          Once registered that the participants forming a team should be from the same
          college.'
          pdf='/connects.pdf'
          cover='/connects.jpeg'
          />
        </Fade>
        <Fade left>
        <TechCard 
          flex='row' 
          title='Kit-tricks'
          desc='Kit referred as circuits and tricks referred as various peculiar things to do. The
          hardware designs have been fabricated in integrated circuit products with limited
          input/output pins. There will be total of 3 rounds.
          First round will be an elimination round that consists of simple written test.
          Second round will also be an elimination round that consist of Circuit Connections.'
          pdf='/kit.pdf'
          cover='/kit.jpeg'
          />
        </Fade>
      </div>
    </Wrapper>
  )
}

export default Tech