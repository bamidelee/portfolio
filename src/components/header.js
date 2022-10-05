import MenuBar from './menuBar';
import { useState, useCallback} from 'react';
import Particles from "react-particles"
import { loadFull } from "tsparticles"
import {bubble as Menu } from "react-burger-menu"
import H1Name from './h1Name';
import '../App.css';
import cv from '../cv.pdf'
import { mdiTwitter } from '@mdi/js';
import Icon from '@mdi/react'
import { mdiGithub } from '@mdi/js';
import { mdiLinkedin } from '@mdi/js';



function Header() {
  const [sideBar, setSideBar] = useState(false)
  const particlesInit = useCallback(async (engine) => {
  
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <div className="header" id='app'>
      <header>
        <MenuBar sideBar={sideBar} setSideBar ={setSideBar}/>
        <Menu isOpen={sideBar} customBurgerIcon={ false } className={ "my-menu" }  customCrossIcon={ false } disableOverlayClick>
          <div className='link menu-item'>
            <div  className='camoLink'>
              <a href="#app">
                <span class="material-symbols-outlined">
                    home
                </span>
                Home
              </a>
              <a href="#app" className='menu-item'>
                <span class="material-symbols-outlined">
                    home
                </span>
                Home
              </a>
            </div>
          </div>

          <div className='link menu-item'>
            <div  className='camoLink'>
              <a href="#app">
                <span class="material-symbols-outlined">
                  person
                </span>
                About
              </a>
              <a href="#app" className='menu-item'>
                <span class="material-symbols-outlined">
                   person
                </span>
                About
              </a>
            </div>
          </div>

          <div className='link menu-item'>
              <div  className='camoLink'>
                <a href="#app">
                  <span class="material-symbols-outlined">
                  hub
                  </span>
                Projects
                </a>
                <a href="#app" className='menu-item'>
                  <span class="material-symbols-outlined">
                  hub
                  </span>
                Projects
                </a>
            </div>
          </div>

          <div className='link menu-item'>
              <div  className='camoLink'>
                <a href="#app">
                  <span class="material-symbols-outlined">
                  description
                  </span>
                Resume
                </a>
                <a href={cv} className='menu-item'>
                  <span class="material-symbols-outlined">
                  description
                  </span>
                Resume
                </a>
            </div>
          </div>
          <div>
            <a href="https://twitter.com/const_bamidele" target='blank'>
              <Icon path={mdiTwitter} size={1.5}/>
            </a>
            <a href="https://github.com/bamidelee" target='blank'>
              <Icon path={mdiGithub} size={1.5}/>
            </a>
            <a href="https://www.linkedin.com/in/olujide-ibrahim-67194223b/" target='blank'>
              <Icon path={mdiLinkedin} size={1.5}/>
            </a>
          </div>
        </Menu>
        <H1Name/>
          <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
        fullScreen: { enable: false },
          background: {
            color: {
              value: "#0E0601",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#BDAB47",
            },
            links: {
              color: "#BDAB47",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: false,
            },
            move: {
              directions: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 3,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
            />
      </header>
      
    </div>
  );
}

export default Header;
