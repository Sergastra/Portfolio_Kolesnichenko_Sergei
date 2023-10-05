import { NavLink } from 'react-router-dom';

export { NavLink } from 'react-router-dom';

export const notFound = () => {
    return (
        <>
            <div>
                <img src="../../assets/images/404.peg.jpeg" alt="notFound" />
                <NavLink to='/'> На главную </NavLink>
            </div>
        </>
    )
}