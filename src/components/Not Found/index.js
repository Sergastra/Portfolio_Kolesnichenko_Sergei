import { Link } from "react-router-dom";

import './index.scss';

const NotFound = () => {
    return (
        <h2 className="notFound"> Not Found <Link to="/"> назад </Link></h2>
    );   
}

export default NotFound ;