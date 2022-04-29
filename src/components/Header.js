import React, { useState, useCallback, useLayoutEffect } from 'react'
import styled from 'styled-components/macro'
import Button from './Button'
import { Icon } from '@iconify/react'

const Wrapper = styled.section`
    color: #e4e4e4;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 1rem;

    .header {
        &-logo {
            display: flex;
            align-items: center;
            font-weight: 700;
            font-size: 1.2rem;
        }
        &-navbar {
            display: flex;
            align-items: center;
            font-weight: 600;
            min-width: 250px;
            width: 40%;
            justify-content: center;
            flex: 1;
            

            &-lg {
              display: flex;
              justify-content: space-between;
              flex: 1;
              cursor: pointer;

              @media screen and (max-width: 900px) {
                display: none;
              }
            }

            &-sm {
              background-color: #121212;
              color: #e4e4e4;
              font-weight: 600;
              padding: 1rem 2rem 2rem;
              position: fixed;
              top: 30px;
              left: 10px;
              right: 10px;
              border-radius: 0.5rem;
              display: flex;
              flex-flow: column;
              align-items: center;
              transform: ${({open}) => open ? `translateX(0%)` : `translateX(120%)`};
              border: 2px groove #e3e3e3;
              transition: all 0.5s ease-in-out;
              cursor: pointer;
              z-index: 10;

              @media screen and (min-width: 900px) {
                display: ${({sticky}) => sticky ? 'flex' : 'none'}
          }
            }

            &-item {
              padding: 0 2rem;
              cursor: pointer;

              &-sm {
                padding: 1.25rem;
                cursor: pointer;
              }
            }
        }
        &-menu {
          z-index: 20;
          cursor: pointer;
          position: fixed;
          right: 25px;
          background-color: #252525;
          border-radius: 50px;
          padding: 0.4rem;
          box-sizing: content-box;
          color: #dcad53;
          @media screen and (min-width: 900px) {
            display: ${({sticky}) => sticky ? 'block' : 'none'}
          }
        }
        
    }
`

const Header = () => {

  const [open, setOpen] = useState(false)
  const menuIcon = open ? 'charm:cross' : 'bytesize:menu'
  const [sticky, setSticky] = useState(false)

  useLayoutEffect( () => {
    const handleScroll = () => {
      const stick = window.scrollY >= window.innerHeight;

      stick ? setSticky(true) : setSticky(false)
    }
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToView = useCallback((id) => {

    const element = document.getElementById(id)

    element.scrollIntoView({
      behavior: 'smooth'
    })
  }, [])


  const toggleNavbar = useCallback(() => {
    setOpen(state => !state)
  }, [])

  return (
    <Wrapper open={open} sticky={sticky}>
        <div className="header-logo">
          <img src="/logo-full.png" alt="GCE LOGO" className="header-logo" width={100} />
          <pre>   GCE Thanjavur</pre>
        </div>
        <div className='header-navbar-lg'>
        <nav className="header-navbar">
          <div className="header-navbar-item" id="header-home"
          onClick={() => scrollToView('hero')}
          >Home</div>
          <div className="header-navbar-item" id="header-events"
          onClick={() => scrollToView('tech')}
          >Events</div>
          <div
          onClick={() => scrollToView('footer')}
          className="header-navbar-item" id="header-location">Location</div>
          <a href='https://forms.gle/v7Jdw7oc8qL2mQZw6'><div className="header-navbar-item" id="header-register">Register</div></a>
        </nav>
        <Button
        onClick={() => scrollToView('contact')}
        >Contact Us</Button>
        </div>
        <Icon className='header-menu' icon={menuIcon} width={30} height={30} 
        onClick={toggleNavbar}
        />
        <nav className="header-navbar-sm">
          <div className="header-navbar-item-sm" id="header-home-sm"
          onClick={() => {
            scrollToView('hero')
            toggleNavbar()
          }
          }
          >Home</div>
          <div className="header-navbar-item-sm" id="header-events-sm"
          onClick={() => {
            scrollToView('tech')
            toggleNavbar()
          }}
          >Events</div>
          <div className="header-navbar-item-sm" id="header-location-sm"
          onClick={() => {
            scrollToView('footer')
            toggleNavbar()
          }}
          >Location</div>
          <a href='https://forms.gle/v7Jdw7oc8qL2mQZw6'><div className="header-navbar-item-sm" id="header-register-sm">Register</div></a>
          <Button
          onClick={() => {
            scrollToView('contact')
            toggleNavbar()
          }}
          >Contact Us</Button>
        </nav>
    </Wrapper>
  )
}

export default Header