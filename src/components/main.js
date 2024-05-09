
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

function Main({ background, screenPos }) {


    return (
        <main>
            <div>
                <h2 className='toolsHeader'>
                    Tools & Skills
                    <div className='breaker'></div>
                </h2>
                <div className='skills'>
                    <AnimationOnScroll animateIn='animate__fadeInLeft'>
                        <div className='frontend'>
                            <h3>Frontend</h3>
                            <div className='skillSet'>
                                <div className='skillItems'>
                                    <Icon path={mdiLanguageHtml5} size={1.5} color={'#7B2BA9'} />
                                    HTML
                                </div>
                                <div className='skillItems'>
                                    <Icon path={mdiLanguageCss3} size={1.5} color={'#7B2BA9'}/>
                                    CSS
                                </div>
                                <div className='skillItems'>
                                    <Icon path={mdiLanguageJavascript} size={1.5} color={'#7B2BA9'}/>
                                    JavaScript
                                </div>
                                <div className='skillItems'>
                                    <Icon path={mdiLanguageTypescript} size={1.5} color={'#7B2BA9'}/>
                                    TypeScript
                                </div>
                                <div className='skillItems'>
                                    <Icon path={mdiReact} size={1.5} color={'#7B2BA9'}/>
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
                    <Projects screenPos={screenPos}/>
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