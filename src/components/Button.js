import React from 'react'
import styled from 'styled-components/macro'

const Wrapper = styled.button`
    /* color: #e4e4e4; */
    background-color: #dcad53;
    padding: 1rem 1.5rem;
    border-radius: 50px;
    font-weight: 600;
    font-size: 0.875rem;
    text-decoration: none;
    color: #252525;
    cursor: pointer;
    :hover {
      background-color: #986e1f;
      color: #fff;
    }
`

const Button = ({ children, media, ...props }) => {

  return (
    <Wrapper media={media} {...props}>{children}</Wrapper>
  )
}

export default Button