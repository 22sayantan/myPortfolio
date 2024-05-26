import "./intro.scss";
import myImg from "../../assets/myImg.jpeg";
import Resume from "../../assets/sayantan_resume.pdf";

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
              <h3>Python Developer </h3>
            </div>

            <div className="profile">
              <p>
                Enthusiastic and detail-oriented Python developer with a solid
                foundation in Python programming, Object-Oriented principles,
                and data structures. Proficient in libraries such as NumPy,
                Pandas, and Flask, with experience in SQL databases and Git
                version control. Strong problem-solving skills and a quick
                learner, eager to contribute to a dynamic team and grow within a
                forward-thinking organization.
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
