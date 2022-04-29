import { BrowserRouter } from 'react-router-dom'
import Routes from './routes';
import { useEffect, useState } from "react";
import styled from 'styled-components/macro'
import HashLoader
from "react-spinners/HashLoader";
import ComingSoon from './sections/comingSoon'

const Wrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: rgb(2,0,36);
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(97,27,63,1) 100%, rgba(252,70,107,1) 100%);
`
// hello
function App() {
  const [loading, setLoading] = useState(true)
  // video will be added
  useEffect(() => {
    setTimeout(() => {
      sessionStorage.setItem('initialLoading', false)
      const loadState = JSON.parse(sessionStorage.getItem('initialLoading'))
      loadState === false 
        && setLoading(false)
    }, 4000)
  }, [])

  useEffect(() => {
    const loadState = JSON.parse(sessionStorage.getItem('initialLoading'))
    loadState === false && setLoading(false)
  })


  return (
    <BrowserRouter>
      {
        loading
            ? 
            <Wrapper>
                <HashLoader
            color="#f5af2c" loading={loading} size={80} />
            </Wrapper>
          : <Routes />
      }
    </BrowserRouter>
  );
}

export default App;
