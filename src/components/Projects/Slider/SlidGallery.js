import './styleSlidGallery.css'
// import { useState } from 'react'
import foto from '../../../assets/images/IMG-My.jpg'
import foto1 from '../../../assets/images/h2js8JelrPw.jpg'
import foto2 from '../../../assets/images/certificate.jpg'
import foto3 from '../../../assets/images/IMG-My.png'
import React from 'react'

const images = [
    {
        name: 'Мой город',
        description: 'Spa-React сайт "Мой город"',
        img: foto
    },
    {
        name: 'MoviE BanK',
        description: 'API-React сайт "Поиск фильма"',
        img: foto2
    },
    {
        name: 'Путешествия',
        description: 'HTML, Css сайт "Путешествия"',
        img: foto1
    },
    {
        name: 'Путешествия',
        description: 'HTML, Css сайт "Путешествия"',
        img: foto3
    },
];

function SlidGallery() {
  return (
      <>
        <div className='slider'>
        {images.map((img, i) => (
                    <span >
                        <img src={img.img} alt={img}/>
                        <h4>{img.name}</h4>
                        <p>{img.description}</p>
                    
                    </span>
                ))}
            {/* <span style={{'--i':1}}><a href='../../../assets/images/logo-s.png'><img src={foto} alt=''/></a></span>
            <span style={{'--i':2}}><img src={foto1} alt=''/></span>
            <span style={{'--i':3}}><img src={foto2} alt=''/></span>
            <span style={{'--i':4}}><img src={foto3} alt=''/></span>
            <span style={{'--i':5}}><img src={foto} alt=''/></span>
            <span style={{'--i':6}}><img src={foto1} alt=''/></span>
            <span style={{'--i':7}}><img src={foto2} alt=''/></span>
            <span style={{'--i':8}}><img src={foto3} alt=''/></span> */}
        </div>
    </>
    )
}

export default SlidGallery
