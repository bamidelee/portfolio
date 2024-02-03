import hola from '../portfolio/Holaaa.jpg'
import shop from '../portfolio/shopping.png'
import '../styles/project.css'
import cv from '../portfolio/cv generator.png'
import memory from '../portfolio/pokemon.png'
import weather from '../portfolio/weather.png'
import tic from '../portfolio/tic-tac-toe.png'
import toDo from '../portfolio/to-do.png'
import sketch from '../portfolio/sketch.png'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import scarepic from '../portfolio/Annotation 2022-10-11 104442.png'
import footballPic from '../portfolio/football.png'
import chatPic from '../portfolio/chatbot.png'
import odin from '../portfolio/odin pic.png'
import brooks from '../portfolio/brooks.jpg'
import "animate.css/animate.min.css";
function Projects () {


  return (
    <div className='projectContainer' id='projects'>

<AnimationOnScroll animateIn='animate__flipInY'>
              <div className='project'>
                <div className='projectSet'>
                  <div className='projectItem'>
                    <img src={brooks} alt="Brookstech" />
                  </div>
                  <div className='projectDescription'>
                      <p>  Brooks Technology is a company that focuses on building enterprise solutions and digitalizing processes across various sectors. Currently, Brooks Technology is developing a platform for the digitalization of the judicial process (Kohus Tech) in Nigeria to assist lawyer, judges and court officials in the administration of justice through a seamless interaction.</p>
                  </div>
                </div>
                <h3>Brookstech</h3>
                <div className='projectLink'>
                  <a href="https://brookstech.ng/" target='blank'>Live</a>
                </div>
              </div>
            </AnimationOnScroll>

      <AnimationOnScroll animateIn='animate__flipInY'>
              <div className='project'>
                <div className='projectSet'>
                  <div className='projectItem'>
                    <img src={odin} alt="Naijaodin" />
                  </div>
                  <div className='projectDescription'>
                      <p>  A platform that disseminates entertainment, sport, politics, and international news.</p>
                  </div>
                </div>
                <h3>Naijaodin</h3>
                <div className='projectLink'>
                  <a href="https://naijaodin.com.ng/" target='blank'>Live</a>
                  <a href="https://github.com/bamidelee/odin-frontend" target='blank'>Code</a>
                </div>
              </div>
            </AnimationOnScroll>

        <AnimationOnScroll animateIn='animate__flipInY'>
        <div className='project'>
          <div className='projectSet'>
            <div className='projectItem'>
              <img src={chatPic} alt="chatbot" />
            </div>
            <div className='projectDescription'>
                <p>  An intelligent chatbot, with different voice for different characters. it gives 3d image of the characters and the characters can make basic moves like dance, backflip. and walk.</p>
            </div>
          </div>
          <h3>Chatbot</h3>
          <div className='projectLink'>
            <a href="https://chatbot-amber.vercel.app/" target='blank'>Live</a>
            <a href="https://github.com/bamidelee/chatbot" target='blank'>Code</a>
          </div>
        </div>
      </AnimationOnScroll>


      <AnimationOnScroll animateIn='animate__flipInY'>
        <div className='project'>
          <div className='projectSet'>
            <div className='projectItem'>
              <img src={scarepic} alt="Scareflix" />
            </div>
            <div className='projectDescription'>
                <p>A movie platform that provides details of scary movies. It categorize movies by popularity, top rated, trendng, and soon to be released. You can also search the TMDB catalogue for any scary movie. i fetched data from TMDB catalougue because its one of the few platforms where i cana get enough movies in one genre.</p>
            </div>
          </div>
          <h3>Scareflix</h3>
          <div className='projectLink'>
            <a href="https://bamidelee.github.io/scareflix/" target='blank'>Live</a>
            <a href="https://github.com/bamidelee/scareflix" target='blank'>Code</a>
          </div>
        </div>
      </AnimationOnScroll>

      <AnimationOnScroll animateIn='animate__flipInY'>
        <div className='project'>
          <div className='projectSet'>
            <div className='projectItem'>
              <img src={hola} alt="hola" />
            </div>
            <div className='projectDescription'>
                <p>A social media app built with MongoDB, GraphQL express, react, NodeJS and more. this is a fully functional and resposnsive app that allows users to create an account, post messages, photos, videos, comment, like/unlike, follow/unfollow, change their avartar and much more!</p>
            </div>
          </div>
          <h3>Social media App</h3>
          <div className='projectLink'>
            <a href="https://bamidelee.github.io/hola-frontend/" target='blank'>Live</a>
            <a href="https://github.com/bamidelee/hola-frontend" target='blank'>Code</a>
          </div>
        </div>
      </AnimationOnScroll>

      <AnimationOnScroll animateIn='animate__flipInY'>
        <div className='project'>
          <div className='projectSet'>
            <div className='projectItem'>
              <img src={shop} alt="shopping cart" />
            </div>
            <div className='projectDescription'>
                <p>An e-commerce with all the functionality any e-commerce should have. Users can filter by category,They have a cart overlay that display the products the user added to cart as well as its selected attributes, a carousel when a product have more than one picture. all products are fetched from fakeporudctsapi</p>
            </div>
          </div>
          <h3>E-commerce App</h3>
          <div className='projectLink'>
            <a href="https://bamidelee.github.io/shopping-cart/" target='blank'>Live</a>
            <a href="https://github.com/bamidelee/shopping-cart" target='blank'>Code</a>
          </div>
        </div>
      </AnimationOnScroll>

      <AnimationOnScroll animateIn='animate__flipInY'>
        <div className='project'>
          <div className='projectSet'>
            <div className='projectItem'>
              <img src={cv} alt="cv maker" />
            </div>
            <div className='projectDescription'>
                <p>An application designed to provide guidiance to people while making their curriculum vitae. It provides instant preveiew aand modern design that makes cv creation really easy</p>
            </div>
          </div>
          <h3>CV Maker</h3>
          <div className='projectLink'>
            <a href="https://bamidelee.github.io/cv-generator/" target='blank'>Live</a>
            <a href="https://github.com/bamidelee/cv-generator" target='blank'>Code</a>
          </div>
        </div>
      </AnimationOnScroll>

      <AnimationOnScroll animateIn='animate__flipInY'>
        <div className='project'>
          <div className='projectSet'>
            <div className='projectItem'>
              <img src={memory} alt="memory game" />
            </div>
            <div className='projectDescription'>
                <p>Built with React, this game puts your memory to the test. You'll be presented with multiple images. The images will shuffle every-time they are clicked. DO NOT click any images twice, else the score will reset to zero. The goal is to get the highest score possible.</p>
            </div>
          </div>
          <h3>Memory Game</h3>
          <div className='projectLink'>
            <a href="https://bamidelee.github.io/pokemon-memory/" target='blank'>Live</a>
            <a href="https://github.com/bamidelee/pokemon-memory" target='blank'>Code</a>
          </div>
        </div>
      </AnimationOnScroll>

      <AnimationOnScroll animateIn='animate__flipInY'>
        <div className='project'>
          <div className='projectSet'>
            <div className='projectItem'>
              <img src={weather} alt="weather app" />
            </div>
            <div className='projectDescription'>
                <p>A weather app that shows current weather for a city. It uses OpenWeatherMap API to fetch current weather. It shows weather in celcius, humidity, wind speed and cloud. It displays time of your current loation</p>
            </div>
          </div>
          <h3>Weather App</h3>
          <div className='projectLink'>
            <a href="https://bamidelee.github.io/weather/" target='blank'>Live</a>
            <a href="https://github.com/bamidelee/weather" target='blank'>Code</a>
          </div>
        </div>
      </AnimationOnScroll>

      <AnimationOnScroll animateIn='animate__flipInY'>
        <div className='project'>
          <div className='projectSet'>
            <div className='projectItem'>
              <img src={tic} alt="tic tac toe" />
            </div>
            <div className='projectDescription'>
                <p>mplementation of classic Tic-Tac-Toe game with JavaScript, HTML, and CSS. It has two game modes: Normal mode and AI mode.</p>
            </div>
          </div>
          <h3>TIC Tac Toe</h3>
          <div className='projectLink'>
            <a href="https://bamidelee.github.io/tic-tac-toe/" target='blank'>Live</a>
            <a href="https://github.com/bamidelee/tic-tac-toe" target='blank'>Code</a>
          </div>
        </div>
      </AnimationOnScroll>

      <AnimationOnScroll animateIn='animate__flipInY'>
        <div className='project'>
          <div className='projectSet'>
            <div className='projectItem'>
              <img src={toDo} alt="to-do" />
            </div>
            <div className='projectDescription'>
                <p>A To-Do List and Task Tracker.</p>
            </div>
          </div>
          <h3>To-Do</h3>
          <div className='projectLink'>
            <a href="https://bamidelee.github.io/to-do/" target='blank'>Live</a>
            <a href="https://github.com/bamidelee/to-do" target='blank'>Code</a>
          </div>
        </div>
      </AnimationOnScroll>

      <AnimationOnScroll animateIn='animate__flipInY'>
        <div className='project'>
          <div className='projectSet'>
            <div className='projectItem'>
              <img src={sketch} alt="etch-a-sketch" />
            </div>
            <div className='projectDescription'>
                <p>A Paint-by-Pixel Image Creation App</p>
            </div>
          </div>
          <h3>Etch-A-Sketch</h3>
          <div className='projectLink'>
            <a href="https://bamidelee.github.io/etch-a-sketch/" target='blank'>Live</a>
            <a href="https://github.com/bamidelee/etch-a-sketch" target='blank'>Code</a>
          </div>
        </div>
      </AnimationOnScroll>
    </div>
  )
}

export default Projects