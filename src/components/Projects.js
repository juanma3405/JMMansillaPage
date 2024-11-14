import drinkAppPhoto from "../assets/DrinkApp.png";
import triviaAppPhoto from "../assets/TriviaApp.png";
import iconoGithub from "../assets/github-icono.png";
import "./Projects.css";

const Projects = () => {
  return (
    <section id="proyectos">
      <div className="grid-container">
        <h1 className="app-titles">Mis proyectos</h1>
        <div className="row">
          <div className="col">
            <img
              className="projectImage"
              src={drinkAppPhoto}
              alt="projectImage"
            ></img>
            <p className="app-paragraph">App para obtener tu trago del dia </p>
            <div className="icons-container">
              <a
                href="https://github.com/juanma3405/DrinkAppReactReduxToolkit"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="icon-style"
                  src={iconoGithub}
                  alt="linkedinPhoto"
                ></img>
              </a>
              <a
                href="https://your-random-drink-app.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-primary">Ver vivo</button>
              </a>
            </div>
          </div>
          <div className="col">
            <img
              className="projectImage"
              src={triviaAppPhoto}
              alt="projectImage"
            ></img>
            <p className="app-paragraph">
              App para disfrutar de una buena trivia
            </p>
            <div className="icons-container">
              <a
                href="https://github.com/juanma3405/TriviaAppFrontEnd"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="icon-style"
                  src={iconoGithub}
                  alt="linkedinPhoto"
                ></img>
              </a>
              <a
                href="https://trivia-fun-time.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-primary">Ver vivo</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
