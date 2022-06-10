import Popup from 'reactjs-popup';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHome, faUser, faNetworkWired, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {NavLink} from 'react-router-dom'
import './index.scss';

const HamMenu = () => {
    <Popup trigger={<button> Trigger</button>} position="right center">
        <div className='popup'> 
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
        </div>
    </Popup>
}

export default HamMenu
