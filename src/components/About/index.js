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
  } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
                        Если вам нужны все доступные типы иконки boxing-glove то есть иконки из пакетов fal, far и fas, вы можете импортировать их все под другим именем и затем добавить в свой fontawesome.js.
                    </p>
                    <p>
                        Теперь, когда вы установили все то, что вам нужно, и добавили иконки  в библиотеку Font Awesome, мы можем использовать их и определить их размеры. В этом мануале мы будем использовать пакет light .В первом примере мы установим нормальный размер:
                    </p>
                    <p>
                        Font Awesome позволяет комбинировать две иконки и создавать таким образом эффекты маскировки. При этом нужно сначала определить обычную иконку, а затем использовать свойство mask, чтобы определить вторую, которая будет расположена поверх первой. Первая иконка при этом будет ограничена размерами маскирующей иконки.
                    </p>
                </div>
                <div className="stage-cube-cont">
                    <div className="cubespinner">
                            <div className="face1">
                            <FontAwesomeIcon icon={faFigma} color="#DD0031" />
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