import { Link, NavLink } from "react-router-dom";
import "./index.scss";
import Code from "../../assets/images/code.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faEnvelope,
  faHome,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Sidebar = () => {
  return (
    <div className="navbar">
      <Link className="logo" to="/">
        {/* <img src={Code} alt="Logo" /> */}
        <FontAwesomeIcon icon={faCode} color="#4d4d4e" />
      </Link>

      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink exact="true" activeclassname="active" to="/about">
          <FontAwesomeIcon
            icon={faUser}
            color="#4d4d4e"
            className="about-link"
          />
        </NavLink>
        <NavLink exact="true" activeclassname="active" to="/contact">
          <FontAwesomeIcon
            icon={faEnvelope}
            color="#4d4d4e"
            className="contact-link"
          />
        </NavLink>
      </nav>

      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/hannah-eichelsdoerfer/"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/hannah-eichelsdoerfer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/hannah.tech/"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Sidebar;
