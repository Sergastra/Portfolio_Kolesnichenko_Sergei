import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import HouseVop from '../../assets/MyProjects/HouseVop_Landing.png'
import foto from '../../assets/MyProjects/my-city_site.png'
import ToureGuide from '../../assets/MyProjects/travel-site.png'
import DogProduct from '../../assets/MyProjects/Cool_Dog.png'
import App_Weather from '../../assets/MyProjects/weather-site.png'
import Mobile_AudioPlayer from '../../assets/MyProjects/Mobile_AudioPlayer.png'
import "./index.scss"




const Projects = ()=> {
 
  const [letterClass, setLetterClass] = useState('text-animate')

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

      <div className='box'>

        <span style={{ '--i': 1 }}>
          <img src={HouseVop} alt='HouseVop' />
          <div className='overlay_text'>
              <h3>Одностраничный сайт<br/>"House VOP"</h3>
              <ul>
                <li>HTML</li>
                <li>SCSS</li>
                <li>JavaScript</li>
              </ul>
              <a className='link-project' href= "https://sergastra.github.io/HouseVop_Landing/" target="_blank" rel="noreferrer">Смотреть поект</a>
            </div>
        </span>

        <span style={{ '--i': 2 }}><img src={foto} alt='Мой город'/>
        
        <div className='overlay_text'>
            <h3>SPA<br/>"Мой город"</h3>
            <ul>
              <li>React</li>
              <li>CSS</li>
              <li>Bootstrap</li>
              <li>HTML</li>
            </ul>
            <a className='link-project' href= "https://sergastra.github.io/my-city/" target="_blank" rel="noreferrer">Смотреть поект</a>
          </div>
        </span>

        <span style={{ '--i': 3 }}>
          <img src={ToureGuide} alt='Toure-Guide' /> 
        
          <div className='overlay_text'>
            <h3>Туристический сайт<br/>"Toure-Guide"</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Bootstrap</li>
            </ul>
            <a className='link-project' href= "https://sergastra.github.io/travel-website/" target="_blank" rel="noreferrer">Смотреть проект </a>
          </div>
        </span>

        <span style={{ '--i': 4 }}>
          <img src={DogProduct} alt='DogProduct' />

          <div className='overlay_text'>
            <h3>Одностраничный сайт<br/>"Dog Product"</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
            <a className='link-project' href= "https://sergastra.github.io/Dog-Product-Landing-page/" target="_blank" rel="noreferrer">Смотреть проект </a>
          </div>
        </span>

        <span style={{ '--i': 5 }}>
          <img src={Mobile_AudioPlayer} alt='Mobile_AudioPlayer' />

          <div className='overlay_text'>
            <h3>Мобильное приложение<br/>"Аудио плеер"</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
            <a className='link-project' href= "https://sergastra.github.io/AudioPlayer/" target="_blank" rel="noreferrer">Смотреть проект</a>
          </div>
        </span>

        <span style={{ '--i': 6 }}>
          <img src={App_Weather} alt='' />
        </span>

        <span style={{ '--i': 7 }}>
          <img src={App_Weather} alt='app-weather' />

          <div className='overlay_text'>
            <h3>Приложение<br/>"Прогноз погоды"</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>API</li>
            </ul>
            <a className='link-project' href= "https://sergastra.github.io/App-Weather/" target="_blank" rel="noreferrer">Смотреть проект</a>
          </div>
        </span> 
      </div>
    </div>
  )
}
export default Projects