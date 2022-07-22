import { useEffect, useState } from 'react'
// import { YMaps, Map, Placemark } from "react-yandex-maps"
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

        emailjs
        .sendForm(
            'service_vibifyk',
            'template_bugjar1',
            form.current,
            'dxVqpTYrRKI2GjPeg'
        )
        .then(
            () => {
            alert('Message successfully sent!')
            window.location.reload(false)
            },
            () => {
            alert('Failed to send the message, please try again')
            }
        )

    }
    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['М', 'о', 'и', '', 'к', 'о', 'н', 'т', 'а', 'к', 'т', 'ы']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        Меня интересуют возможности приглашения на работу. Однако, если у вас есть другой запрос или вопрос,не стесняйтесь обращаться ко мне, используя форму ниже.
                    </p>
                    <div className="contact-form">
                        <form ref={form} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                    <input placeholder="Имя" type="text" name="name" required />
                                </li>
                                <li className="half">
                                    <input
                                        placeholder="Email"
                                        type="email"
                                        name="email"
                                        required
                                    />
                                </li>
                                <li>
                                    <input
                                        placeholder="Тема"
                                        type="text"
                                        name="subject"
                                        required
                                    />
                                </li>
                                <li>
                                    <textarea
                                        placeholder="Сообщение"
                                        name="message"
                                        required
                                    ></textarea>
                                </li>
                                <li>
                                    <input type="submit" className="flat-button" value="отправить" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className="info-map">
                    Колесниченко Сергей,
                    <br />
                    Россия,
                    <br />
                    город <br />
                    Астрахань <br />
                    <span>+7 967 823 20 11</span>
                    <br />
                    <span>"sergastrah@yandex.ru"</span>
                </div>
                {/* <div className="map-wrap">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2753.2360407610568!2d48.06400265290711!3d46.36470469430477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41a905080588c8df%3A0x4b054d975e89673c!2zMS3RjyDQn9C10YDQtdCy0L7Qt9C90LDRjyDRg9C7Liwg0JDRgdGC0YDQsNGF0LDQvdGMLCDQkNGB0YLRgNCw0YXQsNC90YHQutCw0Y8g0L7QsdC7LiwgNDE0MDUy!5e0!3m2!1sru!2sru!4v1658488263377!5m2!1sru!2sru" 
                            width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">

                    </iframe> */}
                    {/* <YMaps >
                        <div>
                            <Map  
                                center={[46.3649, 48.0666]} 
                                zoom={5}
                            >

                            </Map>
                        <Placemark geometry={[46.3649, 48.0666]}>
                            {/* <Popup>Сергей живет здесь, приходи на чашечку кофе :</Popup> */}
                        {/* </Placemark>
                        </div>
                    </YMaps> */} 
                {/* </div>  */}
            </div>
        </>
    )
  }
export default Contact
