import React from 'react'
import styled from 'styled-components/macro'

const Wrapper = styled.section`
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
    .other {
        &-profile {
            width: 80px;
            height: 80px;
            background: #252525;
            border-radius: 50%;
            background: ${({img}) => `url(${img})`};
            background-size: cover;
            background-position: center;
        }
        &-detail {
            margin-left: 0.75rem;
        }
        &-name {
            color: #252525;
        }
        &-position {
            color: #986e1f;
        }
        &-more {
            color: #585858;
        }
    }
`

const Others = ({name, src, position, ...rest}) => {
  return (
    <Wrapper img={src} {...rest}>
        <div className="other-profile" />
        <div className="other-detail">
            <div className='other-name'>{name}</div>
            <h5 className='other-position'>{position}</h5>
            <div className='other-more'>view more</div>
        </div>
    </Wrapper>
  )
}

export default Others