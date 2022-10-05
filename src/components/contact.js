import '../styles/contact.css'
import Icon from '@mdi/react'
import { mdiGithub } from '@mdi/js';
import { mdiLinkedin } from '@mdi/js';
import { mdiTwitter } from '@mdi/js';
function Contact (){


    return(
        <div className="contact">
            <p> Please get in touch our work could be mutually beneficial</p>
            <h3>
                ibrahimolujide@gmail.com
            </h3>
            <h3>
                +234 811 579 6668
            </h3>
            <p>OR</p>
            <div className='contactIcons'>
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
        </div>
    )
}

export default Contact