import perfilPicture from "../assets/FOTO_CV.jpeg";
import iconoGithub from "../assets/github-icono.png";
import iconoLinkedin from "../assets/linkedin-icono.png";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <section id="sobreMi">
      <div className="perfilContainer">
        <img
          className="perfilImage"
          src={perfilPicture}
          alt="perfilPicture"
        ></img>
        <h1 className="app-titles">Juan Manuel Mansilla</h1>
        <h2 className="app-subtitles">Desarrollador Full Stack</h2>
        <p className="app-paragraph">
          Hola soy Juan Manuel, un inquieto investigador de las tecnologias.
          Actualmente programo aplicaciones web utilizando .NET y React
        </p>
        <a
          href={`${process.env.PUBLIC_URL}/CV JMMansilla Fullstack.pdf`}
          download
        >
          <button className="btn btn-primary">Descarga mi CV</button>
        </a>
        <div>
          <a
            href="https://www.linkedin.com/in/juanmanuelmansilla/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="icon-style"
              src={iconoLinkedin}
              alt="linkedinPhoto"
            ></img>
          </a>
          <a
            href="https://github.com/juanma3405?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="icon-style"
              src={iconoGithub}
              alt="linkedinPhoto"
            ></img>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
