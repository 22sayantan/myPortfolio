import "./intro.scss";
import myImg from "../../assets/myImg.jpeg";
import Resume from "../../assets/Sayantan_resume_4.0.pdf";

export default function Intro() {
  return (
    <>
      <section className="intro" id="intro">
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
                As an aspiring Front-End Developer, I am enthusiastic about
                crafting user-centric digital experiences that seamlessly blend
                aesthetics with functionality. With a solid foundation in HTML,
                CSS, and JavaScript, coupled with a keen eye for design, I am
                eager to contribute my skills to create visually appealing and
                responsive web applications. My dedication to staying updated
                with the latest web trends and technologies drives my commitment
                to delivering engaging and intuitive user interfaces.
              </p>

              <a href="/contact">
                <button className="btn">Hire Me</button>
              </a>
              <a href={Resume} download={Resume}>
                <button className="btnR">
                  Resume<i className="fa-solid fa-download"></i>
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="right">
          <img src={myImg} className="myImg" />
        </div>
      </section>
    </>
  );
}
