import './contact.scss'
import myDp from '../../assets/myDp.jpeg'

export default function Contact() {
  return (
    <section className='contact' id='contact'>
      <div className="left">
        <h2>contact form</h2>
        
        <form className='contactForm'>
            <label>First Name</label><br />
            <input type="text" placeholder='e.g: John'/><br />
            <label>Last Name</label><br />
            <input type="text" placeholder='e.g: Das'/><br />

            <label>Message</label><br />
            <textarea name="" id="" cols="30" rows="10" placeholder='write your message here....'></textarea><br />
            <button>Send<i className="fa-solid fa-paper-plane"></i></button>
        </form>
        
      </div>

      <div className="right">
        <div className="myCard">
            <img src={myDp} alt="" />
            <div className="CardContent">
            <h2>Sayantan Dolui</h2>
            <h3>UI Developer</h3>
            <h4>sayantandolui97@gmail.com</h4>
            <h4>+91-9034778567</h4>
            <h5 className='link'><i className="fa-brands fa-facebook"></i></h5>
            <h5 className='link'><i className="fa-brands fa-instagram"></i></h5>
            <h5 className='link'><i className="fa-brands fa-linkedin"></i></h5>
            <h6>west bengal, india-700 909</h6>
            </div>
        </div>
      </div>
    </section>
  )
}
