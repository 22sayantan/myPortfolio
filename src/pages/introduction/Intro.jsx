import './intro.scss'
import myImg from '../../assets/myImg.jpeg';
import Resume from '../../assets/myResume1.0.pdf'
import { Link } from 'react-router-dom';

export default function Intro() {
  return (
      <>
        <section className='intro' id='intro'>
                
          <div className="left">
            <div className="content">
              <div className="name">
                <h1>Sayantan Dolui</h1>
              </div>
                    
              <div className="designation">
                <h3>Front-End Developer</h3>
              </div>
                    
              <div className="profile">
                <p> 
                  Being a front-end developer builds the front-end portion of websites
                  and web applications—the part users see and interact with.
                  A front-end developer creates websites and applications using 
                  web languages such as HTML, CSS, and JavaScript that allow users 
                  to access and interact with the site or app.Also using React library to 
                  make thing so smooth and easier to user or client.
                </p>
                      
                <Link to='/contact'><button className='btn'>Hire Me</button></Link>
                <a href={Resume} download={Resume}><button className='btnR'>Resume<i className="fa-solid fa-download"></i></button></a>
              </div>
            </div>
          </div>
          
          
          <div className="right">
            <img src={myImg} className='myImg'/>
          </div>
        </section>
      </>
  )
}
