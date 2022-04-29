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
          desc='A Paper Presentation is a Technical Event where each participant is required to submit a
          paper about a particular topic and then present it in front of the juries. A Team can have maximum of 2 participants.
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
          desc='A quiz is a game which can also be called a mind sport wherein the players, either as individuals
          or in teams attempt to answer questions posed to them correctly, in order to win a prize. Participants should participate in the Quiz game individually through the given link. The questions
          shall be in the form of multiple choice, True / False statement, specific answer question etc.
          Participants shall not be allowed to open any tab or other electronic instrument.'
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
          Second round will also be an elimination round that consist of Circuit Connections.
          Third round will be the final round & it contains circuit connection and output for it.'
          pdf='/kit.pdf'
          cover='/kit.jpeg'
          />
        </Fade>
      </div>
    </Wrapper>
  )
}

export default Tech