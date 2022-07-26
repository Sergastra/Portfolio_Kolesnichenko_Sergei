import { Link } from "react-router-dom";
import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect } from "react";
import LogoTitle from '../../assets/images/logo-s.png';
import './index.scss';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    const nameArray = ['е', 'р', 'г', 'е', 'й']
    const jobArray = ['Я', ' ','в','е','б','-','р','а','з','р','а','б','о','т','ч','и','к']
    
useEffect(() => {
    return setTimeout(() => {
        setLetterClass('text-animate-hover')
    }, 3000)
}, [])

    return (
        <>
        <div className="container page-home">
            <div className='text-zone'>
                <h1>
                    <span className={letterClass}>П</span> 
                    <span className={`${letterClass} _13`}>р</span> 
                    <span className={`${letterClass} _14`}>и</span> 
                    <span className={`${letterClass} _15`}>в</span> 
                    <span className={`${letterClass} _16`}>е</span> 
                    <span className={`${letterClass} _17`}>т</span> 
                    <span className={`${letterClass} _18`}>,</span>
                     
                    <span className={`${letterClass} _19`}> </span> 
                    <span className={`${letterClass} _20`}>м</span> 
                    <span className={`${letterClass} _21`}>е</span> 
                    <span className={`${letterClass} _22`}>н</span> 
                    <span className={`${letterClass} _23`}>я</span> 
                    <span className={`${letterClass} _24`}> </span> 
                    <span className={`${letterClass} _25`}>з</span> 
                    <span className={`${letterClass} _26`}>о</span> 
                    <span className={`${letterClass} _27`}>в</span> 
                    <span className={`${letterClass} _28`}>у</span> 
                    <span className={`${letterClass} _29`}>т</span> 
                    <br/>
                    <img
                        src={LogoTitle}
                        alt="JavaScript Developer Name, Web Developer Name"
                    />
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={nameArray}
                    idx={31}/>
                
                    <br/>
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={jobArray}
                    idx={36}/>
                </h1>
                <h2> Frontend Developer | Javascript | React</h2>
                <Link to="/contact" className="flat-botton"> Мои контакты</Link>
            </div>
        </div>

        </>
    )
}

export default Home