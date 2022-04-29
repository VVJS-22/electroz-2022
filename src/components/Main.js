import React from 'react'
import styled from 'styled-components/macro'

const Wrapper = styled.section`
    display: flex;
    flex-flow: column;
    align-items: center;
    .main {
        &-img {
            width: 300px;
        }
        &-heading {
            color: #e4e4e4;
            font-size: 2rem;
            /* font-style: italic; */
            font-weight: 900;
            background: -webkit-linear-gradient(#f5af2c, #e4e4e4);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-family: 'Holtwood One SC', serif;
        }
        &-date {
            color: #e3e4e3
        }
    }
`

const Main = () => {
  return (
    <Wrapper>
        <img className='main-img' src="/electroz.png" alt="Electroz Logo" />
        <h1 className='main-heading'>ELECTROZ 2K22</h1>
        <h4 className='main-date'>May 11 2022</h4>
    </Wrapper>
  )
}

export default Main