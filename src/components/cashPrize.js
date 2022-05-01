import { Icon } from '@iconify/react'
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
    max-width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: transparent;
    box-sizing: content-box;
    padding: 1rem;
    border: 1px groove #e3e3e3;
    border-radius: 50% 50% 10px 50px;
    margin: 1rem auto;

    @media screen and (min-width: 540px) { 
        position: absolute;
        font-size: 0.75rem;
        max-width: 100px;
        top: 30%;
        right: 10px;
        transform: translateY(-50%);
    }

    @media screen and (min-width: 900px) {
        position: absolute;
        top: 50%;
        right: 50px;
        transform: translateY(-50%);
        font-size: 1rem;
        max-width: 200px;
    }
    @media screen and (min-width: 1000px) {
        right: 100px;
    }
    .cash {
        &-title {
            text-align: center;
            margin-top: 1rem;
            color: #e4e4e4;
        }
    }

`

const cashPrize = (props) => {
    console.log(props)
  return (
    <Wrapper {...props}>
        <Icon className='cash-icon' icon='emojione:money-bag' 
        width={50}
        />
        <h3 className='cash-title'>Attractive Cash Prizes Available</h3>
    </Wrapper>
  )
}

export default cashPrize