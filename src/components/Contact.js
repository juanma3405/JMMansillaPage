import gmail from "../assets/gmail-icono.png";
import whatsapp from "../assets/whatsapp-icono.png";
import linkedin from "../assets/linkedin.png";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contacto">
      <h1 className="app-titles">Contactame</h1>
      <div className="div-contact">
        <div className="item-contact">
          <img src={linkedin} alt="linkedin-icon"></img>
          <h6 className="app-subtitles">
            Linkedin: https://www.linkedin.com/in/juanmanuelmansilla/
          </h6>
        </div>
        <div className="item-contact">
          <img src={gmail} alt="gmail-icon"></img>
          <h6 className="app-subtitles">
            Email: juanmanuelmansillacacheda@gmail.com
          </h6>
        </div>
        <div className="item-contact">
          <img src={whatsapp} alt="whatsapp-icon"></img>
          <h6 className="app-subtitles">WhatsApp: 1165631686 </h6>
        </div>
        {/* <div className="item-contact">
          <img src={gmail} alt="gmail-icon"></img>
          <h6 className="app-subtitles">
            Email: juanmanuelmansillacacheda@gmail.com
          </h6>
        </div>
        <div className="item-contact">
          <img src={whatsapp} alt="whatsapp-icon"></img>
          <h6 className="app-subtitles">WhatsApp: 1165631686 </h6>
        </div>
        <div className="item-contact">
          <img src={linkedin} alt="linkedin-icon"></img>
          <h6 className="app-subtitles">
            Linkedin: https://www.linkedin.com/in/juanmanuelmansilla/
          </h6>
        </div> */}
      </div>
    </section>
  );
};

export default Contact;
