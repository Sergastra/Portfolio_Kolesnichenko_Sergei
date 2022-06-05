import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss';

const Projects = ()=> {

    const [letterClass, setLetterClass] = useState('text-animate')
//   const form = useRef()

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])
    return (
        <div className="container projects-page">
            <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['М', 'о', 'и', ' ', 'п', 'р', 'о', 'е', 'к', 'т', 'ы']}
                            idx={15}
                        />
                    </h1>
            </div>
        </div>
    )
}
export default Projects