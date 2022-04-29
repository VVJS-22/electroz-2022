import React, { useCallback } from 'react'
import styled from 'styled-components/macro'
import swal from 'sweetalert'

const Wrapper = styled.section`
    padding: 4rem 2rem 2rem;
    display: flex;
    justify-content: center;
    .card {
        width: 100%;
        max-width: 480px;
        border-radius: 50px 0 50px;
        overflow: hidden;
        border: 1px solid rgba(0,0,0,0.2);
        display: flex;
        flex-flow: column;
        &-image {
            width: 100%;
            height: 250px;
            background: ${({img}) => `url(${img})`};
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
        }
        &-download {
            background-color: #dcad53;
            padding: 2rem;
            color: #252525;
            font-weight: 700;
            font-size: 1.2rem;
        }
        &-title {
            color: #252525;
            margin: 1rem;
            text-align: left;
        }
        &-details {
            color: #585858;
            line-height: 2;
            margin: 1rem;
            text-align: left;
        }
    }
`

const NonTechCard = ({title, desc, pdf, cover}) => {

    const alertDownload = useCallback(() => {
        swal('Pdf will be downloaded. Check your downloads folder.')
    },[])

    return (
    <Wrapper img={cover}>
        <div className="card">
            <div className="card-image" />
            <h2 className="card-title">{title}</h2>
            <p className="card-details">
            {desc}
            </p>
            <a href={pdf} download><div className="card-download" onClick={alertDownload}>Download Details</div></a>
        </div>
    </Wrapper>
  )
}

export default NonTechCard