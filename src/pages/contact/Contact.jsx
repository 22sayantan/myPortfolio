import "./contact.scss";
// import myDp from "../../assets/myDp.jpeg";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      {/* <div className="left">
        <h2>contact form</h2>

        <h3>This contact will enable from 01.01.2024 onwards</h3>

        <form className="contactForm">
          <label>First Name</label>
          <br />
          <input type="text" placeholder="e.g: John" disabled />
          <br />
          <label>Last Name</label>
          <br />
          <input type="text" placeholder="e.g: Das" disabled/>
          <br />

          <label>Message</label>
          <br />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="write your message here...."
            disabled
          ></textarea>
          <br />
          <button disabled>
            <span>Send</span>
            <i className="fa-solid fa-paper-plane"></i>
          </button>
        </form>
      </div> */}

      {/* <div className="right">
        <div className="myCard">
          <div>
            <img src={myDp} alt="" />
            <div className="CardContent">
              <h2>Sayantan Dolui</h2>
              <h3>&ensp;Fron End Developer</h3>
              
              <h6>&ensp;  West Bengal, India-721134</h6>
              <div className="icons">
                &ensp;
                <h5 className="link">
                  <i className="fa-brands fa-facebook"></i>
                </h5>
                <h5 className="link">
                  <i className="fa-brands fa-instagram"></i>
                </h5>
                <h5 className="link">
                  <i className="fa-brands fa-linkedin"></i>
                </h5>
              </div>

            </div>
          </div>
        <div className="no_mail">
          <h4>📞+91-9093867878</h4>
          <h4>📧sayantandolui97@gmail.com</h4>
        </div>
        </div>
      </div> */}

      <header>
        <h1>Contact Me</h1>
      </header>
      <div className="Contact_me">
      <h1>linkedIN</h1>
      <h3><a href="https://www.linkedin.com/in/sayantan-dolui-a59524223">link</a></h3>
      </div>
    </section>
  );
}
