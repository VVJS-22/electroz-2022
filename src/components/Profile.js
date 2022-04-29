import React from 'react'
import styled from 'styled-components/macro'

const Wrapper = styled.section`
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    .profile {
        &-img {
            width: 200px;
            height: 200px;
            background: ${({src}) => `url(${src})`};
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
        }
        &-position {
            padding: 1rem 1rem 0.25rem;
            color: #986e1f;
        }
        &-name {
            color: #252525;
        }
    }
`

const Profile = ({name, src, position}) => {
  return (
    <Wrapper src={src}>
        <div className="profile-img" />
        <h5 className='profile-position'>{position}</h5>
        <div className='profile-name'>{name}</div>
    </Wrapper>
  )
}

export default Profile