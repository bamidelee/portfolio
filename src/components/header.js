import MenuBar from './menuBar';
import { useState, useCallback } from 'react';
import Particles from "react-particles"
import { loadFull } from "tsparticles"
import { bubble as Menu } from "react-burger-menu"
import H1Name from './h1Name';
import '../App.css';
import cv from '../cv.docx'
import { mdiTwitter } from '@mdi/js';
import Icon from '@mdi/react'
import { mdiGithub } from '@mdi/js';
import { mdiLinkedin } from '@mdi/js';



function Header({ background, setBackground, screenPos }) {
  const [sideBar, setSideBar] = useState(false)
  const particlesInit = useCallback(async (engine) => {

    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
  }, []);

 
  return (
    <div className="header" id='app' style={{backgroundAttachment:'fixed'}}>
      <div className='headerShade' style={{opacity: `${screenPos/700}`}}>

      </div>
      <header>
        <MenuBar sideBar={sideBar} setSideBar={setSideBar} />
        <div className='headerTop'>
        {screenPos > 100 && <div className='headerTopBlur'>
          
        </div>}
          <h1>
            Ibrahim Olujide
          </h1>
        </div>
        <Menu isOpen={sideBar} onClose={() => setSideBar(false)}>

          <a className="link" href="#app">
            <span class="material-symbols-outlined">
              home
            </span>
            <span className="link--top">Home</span>
            <span className="link--bottom">Home</span>
          </a>
          <a className="link" href="#about">
            <span class="material-symbols-outlined">
              person
            </span>
            <span className="link--top">About</span>
            <span className="link--bottom">About</span>
          </a>
          <a className="link" href="#projects">
            <span class="material-symbols-outlined">
              hub
            </span>
            <span className="link--top">Projects</span>
            <span className="link--bottom">Projects</span>
          </a>
          <a className="link" href={cv}>
            <span class="material-symbols-outlined">
              description
            </span>
            <span className="link--top">Resume</span>
            <span className="link--bottom">Resume</span>
          </a>

          <div className='socials'>
            <a href="https://twitter.com/const_bamidele" target='blank'>
              <Icon path={mdiTwitter} size={1.5} color={'#7B2BA9'} />
            </a>
            <a href="https://github.com/bamidelee" target='blank'>
              <Icon path={mdiGithub} size={1.5} color={'#7B2BA9'}/>
            </a>
            <a href="https://www.linkedin.com/in/olujide-ibrahim-67194223b/" target='blank'>
              <Icon path={mdiLinkedin} size={1.5} color={'#7B2BA9'} />
            </a>
          </div>



        </Menu>
        <H1Name />
        <Particles
          className='particles'
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            fullScreen: { enable: false },
            background: {
              color: {
                value: '#0000000',
              },
            },
            fpsLimit: 80,
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
                value: "#FFD7CD",
              },
              links: {
                color: "#FFD7CD",
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
                value: 0.1,
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
