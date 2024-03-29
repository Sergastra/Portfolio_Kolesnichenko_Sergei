import { useEffect, useState } from 'react'
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
            </div>
        </>
    )
}
export default Contact
