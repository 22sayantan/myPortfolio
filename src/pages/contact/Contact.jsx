import "./contact.scss";
import Linkedin from "../../assets/linkedin.png";
import Facebook from "../../assets/facebook.png";
import Instagram from "../../assets/instagram.png";
import Gmail from "../../assets/gmail.png";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <header>
        <h1>Contact Me</h1>
      </header>
      <div className="Contact_me">
        <div className="linkedin">
          <h3>
            <a href="https://www.linkedin.com/in/sayantan-dolui-a59524223">
              <img src={Linkedin} alt="" />
            </a>
            Linkedin
          </h3>
        </div>
        <div className="facebook">
          <h3>
            <a href="https://www.facebook.com/profile.php?id=100007368376074">
              <img src={Facebook} alt="" />
            </a>
            Facebook
          </h3>
        </div>
        <div className="instagram">
          <h3>
            <a href="https://www.instagram.com/sayantan_dolui/">
              <img src={Instagram} alt="" />
            </a>
            Instagram
          </h3>
        </div>
        <div className="Gmail">
          <h3>
            <a href="mailto:sayantandolui97@gmail.com">
              <img src={Gmail} alt="" />
            </a>
            Gmail
          </h3>
        </div>
      </div>
    </section>
  );
}
