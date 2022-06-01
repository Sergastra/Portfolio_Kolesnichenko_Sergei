import {Link, NavLink} from 'react-router-dom'
import './index.scss'
// import Logo from '../../assets/images/logo-s.png'
// import LogoSubtitle from '../../assets/images/logo-s.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHome, faUser, faGraduationCap, faNetworkWired, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {faGithub, faSkype, faTelegram, faWhatsapp} from '@fortawesome/free-brands-svg-icons'


const Sidebar = () => (

    <div className="nav-bar">
        <Link className="logo" to="/">
             <h4>Сергей</h4> 
            {/* <img src={Logo} alt="logo"/> */}
            {/* <img className="sub-logo" src={LogoSubtitle} alt="logo"/>  */}
        </Link>
        <nav>
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
                className="education-link" 
                to="education"
                >
                <FontAwesomeIcon icon={faGraduationCap} color='#4d4d4e'/>
            </NavLink>
            <NavLink 
                exact="true" 
                acteveclassname="active" 
                className="works-link" 
                to="works"
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
    </div>
    
)
export default Sidebar