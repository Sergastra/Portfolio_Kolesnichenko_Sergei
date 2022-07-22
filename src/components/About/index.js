import './indec.scss';
import { useEffect, useState } from "react";
import AnimatedLetters from '../AnimatedLetters';
import {
    faFigma,
    faCss3,
    faGitAlt,
    faHtml5,
    faJsSquare,
    faReact,
    faPhp,
    faNode,
    faAngular,
    faBootstrap,
    faLaravel,
    faSass,
  } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import My from '../../assets/images/IMG-My.png'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
            <div className="container about-page">
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass} 
                            strArray={['О','б','о',' ','м','н','е']}
                            idx={15}/>
                    </h1>

                    <p>
                        Возраст: 38 лет, 
                        <br/>
                        Образование: Высшее, Астраханский государственный университет ППФ 2006г.
                        <br/>
                        Прошел обучение по специальности Web-developer Full-stack в компьютерной академии "Топ" 2022г.
                        <br/>
                        <a href='https://disk.yandex.ru/i/RUv_LuYsL0RaDg' rel='noreferrer'> Диплом смотреть тут</a>
                    </p>
                    <h4>Профессиональные навыки:</h4>
                    <p>
                        Опыт работы с 
                    </p>    
                        <span className='icon-works'>
                            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                            <FontAwesomeIcon icon={faFigma} color="#DD0031" />
                            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                            <FontAwesomeIcon icon={faNode} color="#2f940e" />
                        </span>
                    
                    <h4>Знания:</h4>
                        <span className='icon-works'>
                            <FontAwesomeIcon icon={faPhp} color="#14278f" />
                            <FontAwesomeIcon icon={faBootstrap} color="#14278f" />
                            <FontAwesomeIcon icon={faAngular} color="#F06529" />
                            <FontAwesomeIcon icon={faLaravel} color="#F06529" />
                            <FontAwesomeIcon icon={faSass} color="#F06529" />
                        </span>
                        <p>
                            Опыт адаптивной верстки;
                            <br/>
                            Опыт создания HTML- страницы сайта на основе дизайн макета;
                            <br/>
                            Навыки привязки к пользовательскому интерфейсу скриптов, которые обеспечивают визуализацию и анимацию страниц сайта;
                            <br/>
                            UI/UX Design;
                        </p>
                         
                    <h4>Дополнительные сведения:</h4>

                        <p>
                            Я получаю удовольствие от программирования. Это моё любимое дело, которому я посвещаю много времени. Так же изучаю литературу на эту тему.
                            <br/>
                            Готов учиться и совершенствоваться не боюсь трудностей, ответственный и умею работать в команде.
                            <br/>
                            Планирую в ближайшее время приступить к изучению Английского языка
                            <br/>
                            <mark>Каждый день стараюсь узнавать что-то новое и становиться лучше.</mark>
                        </p>
                    <p>
                        Я получаю удовольствие от программирования. Это моё любимое дело, которому я посвещаю много времени. Так же изучаю литературу на эту тему.
                        <br/>
                        Готов учиться и совершенствоваться не боюсь трудностей, ответственный и умею работать в команде.
                        <br/>
                        Планирую в ближайшее время приступить к изучению Английского языка
                        <br/>
                        <mark>Каждый день стараюсь узнавать что-то новое и становиться лучше.</mark>
                    </p>
                </div>
                
                <div className="stage-cube-cont">
                    <div className="cubespinner">
                        <div className="face1">
                            <img 
                                src={My} 
                                alt='my-foto'
                            />
                        </div>
                        <div className="face2">
                            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                        </div>
                        <div className="face3">
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                        </div>
                        <div className="face5">
                            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                        </div>
                        <div className="face6">
                            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About