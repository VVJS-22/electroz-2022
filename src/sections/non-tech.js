import React from 'react'
import styled from 'styled-components/macro'

import NonTechCard from '../components/NonTechCard'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { nonTechItems } from '../lib/nonTechItems'

const Wrapper = styled.section`
  text-align: center;
  overflow-x: hidden;

  .non-tech {
    &-heading {
      font-size: 3rem;
      background: -webkit-linear-gradient(#ffae00, #a38e5d);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;

      padding: 1rem;

      @media screen and (max-width: 440px) {
        font-size: 2rem;
      }
    }
  }

  .container {
    width: 100%;
    margin-bottom: 2rem;
  }

`

const NonTech = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <Wrapper id='non-tech'>
      <h1 className='non-tech-heading'>Non-Technical Events</h1>
      <div className='container'>
      <Slider {...settings}>
      { nonTechItems.map(item => (
          <div key={item.id} className='slide'>
            <NonTechCard 
            title={item.title}
            pdf={item.pdf}
            cover={item.cover}
            desc={item.desc}
            />
          </div>
        ))}
      </Slider>
      </div>
    </Wrapper>
  )
}

export default NonTech