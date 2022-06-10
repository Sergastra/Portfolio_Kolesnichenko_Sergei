import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import SlidGallery from './Slider/SlidGallery'



const Projects = ()=> {
    // const { name, description, img } = projectDetail
    const [letterClass, setLetterClass] = useState('text-animate')
  // const form = useRef()

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
                  
            </div >
            
            <section className='slideG-container'>
            <SlidGallery/>
            </section>  
              </div>    
             
              /* <div className='item row'>
                <div className='shadow-effect col-6'>
                  <img src={img} alt='' srcSet='' className='img-circle'/>
                  <p>{description}</p>
                </div>
                <div className='name-project'>
                    <h5> {name} </h5>
              </div> 

        </div>
        </div> */
         
    )
}
export default Projects