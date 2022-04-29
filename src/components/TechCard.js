import React, { useCallback } from 'react'
import styled from 'styled-components/macro'
import Button from './Button'
import swal from 'sweetalert'

const Wrapper = styled.section`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-bottom: 2rem;

  .tech {
    &-flex {
      width: 70%;
      display: flex;
      padding: 1rem;
      flex-direction: ${({direction}) => direction};
      justify-content: space-evenly;
      align-items: center;
      /* border-bottom: 0.5px solid rgba(186, 204, 201, 0.5); */

      @media screen and (max-width: 900px) {
        flex-direction: column;
        align-items: center;
      }
    }
    &-img {
      width: 400px;
      height: 550px;
      background: ${({img}) => `url(${img})`}; 
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;


      @media screen and (max-width: 900px) {
        width: 100%;
        height: 300px;
        margin-top: 1.2rem;
      }
    }
    &-details {
      width: 50%;
      padding: 0 4rem;
      @media screen and (max-width: 900px) {
        padding-left: 0;
        align-self: flex-start;
        width: 100%;
        padding: 3rem 0 1.2rem;
      }
    }
    &-event {
      &-title, &-description {
        padding-bottom: 2rem;
      }

      &-title {
        color: #252525;
      }

      &-description {
        color: #585858;
        line-height: 2;
      }
    }
  }
`

const TechCard = ({ flex, title, desc, pdf, cover }) => {

  const alertDownload = useCallback(() => {
    swal('Pdf will be downloaded. Check your downloads folder.')
  },[])

  return (
    <Wrapper img={cover} direction={flex}>
      <div className="tech-flex">
        <div className="tech-img" />
        <div className="tech-details">
          <h2 className="tech-event-title">{title}</h2>
          <p className='tech-event-description'>{desc}</p>
          <a href={pdf} download><Button className="tech-event-download"
          onClick={alertDownload}
          >Download Details</Button></a>
        </div>
      </div>
    </Wrapper>
  )
}

export default TechCard