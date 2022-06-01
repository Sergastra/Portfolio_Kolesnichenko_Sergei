import '../Layout/index.scss';
import { useEffect, useState } from "react";
import AnimatedLetters from '../AnimatedLetters';

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
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
                        Если вам нужны все доступные типы иконки boxing-glove (то есть иконки из пакетов fal, far и fas), вы можете импортировать их все под другим именем и затем добавить в свой fontawesome.js.
                    </p>
                    <p>
                        Теперь, когда вы установили все то, что вам нужно, и добавили иконки  в библиотеку Font Awesome, мы можем использовать их и определить их размеры. В этом мануале мы будем использовать пакет light (fal).В первом примере мы установим нормальный размер:
                    </p>
                    <p>
                        Font Awesome позволяет комбинировать две иконки и создавать таким образом эффекты маскировки. При этом нужно сначала определить обычную иконку, а затем использовать свойство mask, чтобы определить вторую, которая будет расположена поверх первой. Первая иконка при этом будет ограничена размерами маскирующей иконки.
                    </p>
                </div>
            </div>
        </>
    )
}

export default About