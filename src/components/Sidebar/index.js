import {Link, NavLink} from 'react-router-dom'
import './index.scss'
import Logo from '../../assets/images/logo-s.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHome, faUser, faNetworkWired, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {faGithub, faSkype, faTelegram, faWhatsapp} from '@fortawesome/free-brands-svg-icons'


const Sidebar = () => (
//    const [ isMobile, setIsMobile ] = useState(false);
    <div className="nav-bar">
    
        <Link className="logo" to="/">
            <img src={Logo} alt="logo"/>
        </Link>
        <nav >
            
            {/* className={isMobile ? "nav-links-mobile" : "nav-bar"}
           onClick={() => setIsMobile(false)} */}
            <NavLink 
                exact="true" 
                acteveclassname="active" 
                to="/"
                >
                <FontAwesomeIcon icon={faHome} color='#4d4d4e'/>
            </NavLink>
            <NavLink 
                exact="true" 
                acteveclassname="active" 
                className="about-link" 
                to="about"
                >
                <FontAwesomeIcon icon={faUser} color='#4d4d4e'/>
            </NavLink>
            <NavLink 
                exact="true" 
                acteveclassname="active" 
                className="projects-link" 
                to="projects"
                >
                <FontAwesomeIcon icon={ faNetworkWired} color='#4d4d4e'/>
            </NavLink>
            <NavLink 
                exact="true" 
                acteveclassname="active" 
                className="contact-link" 
                to="/contact"
                >
                <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e'/>
            </NavLink>
        </nav>

        <ul>
            <li>
                <a 
                    target="_blank" 
                    rel='noreferrer' 
                    href='https://github.com/Sergastra'
                >
                    <FontAwesomeIcon icon={faGithub}  color='#4d4d4e'/> 
                </a>
            </li>
            <li>
                <a 
                    target="_blank" 
                    rel='noreferrer' 
                    href='https://github.com/Sergastra'
                >
                    <FontAwesomeIcon icon={faSkype}  color='#4d4d4e'/> 
                </a>
            </li>
            <li>
                <a 
                    target="_blank" 
                    rel='noreferrer' 
                    href='https://gist.github.com/Sergastra'
                >
                    <FontAwesomeIcon icon={faTelegram}  color='#4d4d4e'/> 
                </a>
            </li>
            <li>
                <a 
                    target="_blank" 
                    rel='noreferrer' 
                    href='/contact'
                >
                    <FontAwesomeIcon icon={faWhatsapp}  color='#4d4d4e'/> 
                </a>
            </li>
        </ul>
        {/* <button className="mobile-menu-icon"
            onClick={() => setIsMobile (!isMobile)}
          >
              {isMobile ? (<FontAwesomeIcon icon= {faTimes} />) : (<FontAwesomeIcon icon= {faBars} />)}
        </button> */}
    </div>
    
)
export default Sidebar