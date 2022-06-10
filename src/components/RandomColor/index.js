import '../AnimatedLetters/index.scss'

const RandomColor = ( {color, colorArray}) => {
    // const colorArray = [Math.floor(Math.random() * colorArray.length)];
    const colorArray = ['#FF1493', '#FF00FF', '#FFFF00', '#0000FF', '#7CFC00']
    return (

        <span>
            {
                colorArray.map((char, i)=>(
                    <span key={char = i} className={`${color} _${i+ idx[Math.floor(Math.random() * colorArray.length)]}`}>
                        {char}
                    </span>
                ))
            }
        </span>
    )
};

export default RandomColor;