import  { useState } from 'react'
import './style.css'
// const steck = { Html, Css , React, Javascript}
const ProgressBar = ({done}) => {

    const [ style, setStyle ] = useState({});

    setTimeout(() => {
        const newStyle = {
            opacity: 1,
            width: `${done}%`  
        }
        setStyle(newStyle);
    }, 1000);
  return (

    <div className='progress'>
        <div className='progress-done' 
            style={style}> 
            {done}%
        </div>
    </div>
  )
}

export default ProgressBar
