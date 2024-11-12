import "./SideBar.css";
import perfilPicture from "../assets/FOTO_CV.jpeg";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-items">
        <img
          className="sideBarImage"
          src={perfilPicture}
          alt="perfilPicture"
        ></img>
        <br />
        <a href="#sobreMi">Sobre mi </a>
        <a href="#proyectos">Proyectos </a>
        <a href="#contacto">Contacto </a>
      </div>
    </div>
  );
};

export default Sidebar;
