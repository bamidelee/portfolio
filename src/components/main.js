
import '../styles/main.css'
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Icon from '@mdi/react'
import { mdiLanguageHtml5 } from '@mdi/js';
import { mdiLanguageCss3 } from '@mdi/js';
import { mdiLanguageJavascript } from '@mdi/js';
import { mdiLanguageTypescript } from '@mdi/js';
import { mdiReact } from '@mdi/js';
import Projects from './projects';
import Contact from './contact';
import { Icon as I } from '@iconify/react';

function Main({ background }) {


    return (
        <main>
            <AnimationOnScroll animateIn="animate__bounceIn">
                <section id='about'>
                    <h2>
                        About
                        <div className='breaker'></div>
                    </h2>
                    <div className='iconContainer'>
                        <div className="image1Container">
                            <div className='image1'>fullstack frontend backend fullstack frontend backend fullstack frontend backend fullstack frontend backend fullstack frontend backend fullstack frontend backend fullstack frontend backend fullstack frontend backend fullstack frontend backend fullstack frontend backend fullstack frontend backend fullstack frontend backend fullstack frontend backend fullstack frontend backend fullstack frontend backend fullstack frontend backend fullstack frontend backend fullstack frontend backend fullstack frontend backend fullstack frontend backend fullstack frontend backend fullstack frontend backend fullstack frontend backend fullstack frontend backend</div>
                        </div>
                        <div className='image2'>fullstack frontend backend fullstack frontend backend fullstack frontend backend fullstack frontend backend fullstack frontend backend fullstack frontend backend fullstack frontend backend fullstack frontend backend fullstack frontend backend fullstack frontend backend fullstack frontend backend fullstack frontend backend fullstack frontend backend fullstack frontend backend fullstack frontend backend fullstack frontend backend fullstack frontend backend fullstack frontend backend fullstack frontend backend fullstack frontend backend fullstack frontend backend fullstack frontend backend fullstack frontend backend fullstack frontend backend</div>
                        <div className='image3'>fullstack frontend backend fullstack frontend backend fullstack frontend backend fullstack frontend backend fullstack frontend backend fullstack frontend backend fullstack frontend backend fullstack frontend backend fullstack frontend backend fullstack frontend backend fullstack frontend backend fullstack frontend backend fullstack frontend backend fullstack frontend backend fullstack frontend backend fullstack frontend backend fullstack frontend backend fullstack frontend backend fullstack frontend backend fullstack frontend backend fullstack frontend backend fullstack frontend backend fullstack frontend backend fullstack frontend backend</div>
                    </div>
                    <p>
                        Committed to the idea of life-long learning, I am a full stack developer with a passion for all things web development. <br />
                        I'm a full-stack developer who carries a keen eye for design in a user-first approach. My focus is in creating responsive layouts on the JavaScript stack of React and NodeJS, and from my background as a teacher I'm well acquainted to bringing out solutions to complex problems.<br />
                        Driven by curiosity and new technologies, I am continuously pushing the boundaries to create immersive, emotional and joyful experiences that blur the lines of reality through web development
                    </p>
                </section>
            </AnimationOnScroll>
            <div>
                <h2>
                    Tools & Skills
                    <div className='breaker'></div>
                </h2>
                <div className='skills'>
                    <AnimationOnScroll animateIn='animate__fadeInLeft'>
                        <div className='frontend'>
                            <h3>Frontend</h3>
                            <div className='skillSet'>
                                <div className='skillItems'>
                                    <Icon path={mdiLanguageHtml5} size={1.5} />
                                    HTML
                                </div>
                                <div className='skillItems'>
                                    <Icon path={mdiLanguageCss3} size={1.5} />
                                    CSS
                                </div>
                                <div className='skillItems'>
                                    <Icon path={mdiLanguageJavascript} size={1.5} />
                                    JavaScript
                                </div>
                                <div className='skillItems'>
                                    <Icon path={mdiLanguageTypescript} size={1.5} />
                                    TypeScript
                                </div>
                                <div className='skillItems'>
                                    <Icon path={mdiReact} size={1.5} />
                                    React
                                </div>

                                <div className='skillItems'>
                                    <I icon="akar-icons:redux-fill" color="#7b2ba9" width="32" height="32" />
                                    Redux
                                </div>
                                <div className='skillItems'>
                                    <I icon="mdi:webpack" color="#7b2ba9" width="32" height="32" />
                                    Webpack
                                </div>
                                <div className='skillItems'>
                                    <I icon="simple-icons:jest" color="#7b2ba9" width="32" height="32" />
                                    Jest
                                </div>
                                <div className='skillItems'>
                                    <I icon="bi:git" color="#7b2ba9" width="32" height="32" />
                                    Git
                                </div>
                                <div className='skillItems'>
                                    <I icon="teenyicons:nextjs-solid" color="#7b2ba9" width="32" height="32" />
                                    Next
                                </div>
                                <div className='skillItems'>
                                    <I icon="teenyicons:tailwind-solid" color="#7b2ba9" width="32" height="32" />
                                    Tailwind
                                </div>
                            </div>
                        </div>
                    </AnimationOnScroll>
                    <AnimationOnScroll animateIn='animate__fadeInRight'>
                        <div className='backend'>
                            <h3>Backend</h3>
                            <div className='skillSet'>
                                <div className='skillItems'>
                                <I icon="la:node" color="#7b2ba9" width="32" height="32" />
                                    Node
                                </div>
                                <div className='skillItems'>
                                <I icon="simple-icons:express" color="#7b2ba9" width="32" height="32" />
                                    Express
                                </div>
                                <div className='skillItems'>
                                <I icon="teenyicons:mongodb-solid" color="#7b2ba9" width="32" height="32" />
                                    MongoDB
                                </div>
                                <div className='skillItems'>
                                <I icon="teenyicons:graphql-outline" color="#7b2ba9" width="32" height="32" />
                                    GraphQL
                                </div>
                                <div className='skillItems'>
                                <I icon="fa-brands:linux" color="#7b2ba9" width="32" height="32" />
                                    Linux
                                </div>
                                <div className='skillItems'>
                                <I icon="teenyicons:npm-outline" color="#7b2ba9" width="32" height="32" />
                                    NPM
                                </div>
                                <div className='skillItems'>
                                <I icon="teenyicons:python-solid" color="#7b2ba9" width="32" height="32" />
                                    Python
                                </div>
                                <div className='skillItems'>
                                <I icon="simple-icons:pug" color="#7b2ba9" width="32" height="32" />
                                    Pug
                                </div>
                            </div>
                        </div>
                    </AnimationOnScroll>
                </div>
                <div>
                    <h2>
                        Projects
                        <div className='breaker'></div>
                    </h2>
                    <Projects />
                </div>
                <div>
                    <h2>
                        Contact
                        <div className='breaker'></div>
                    </h2>
                    <Contact />
                </div>
            </div>
        </main>
    )
}

export default Main