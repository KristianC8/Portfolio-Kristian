import { useState, useEffect } from 'react'
import './Contact.css'
import { useForm } from '../hooks/useForm'
import { Loader } from './Loader'
import { ReCaptcha } from './reCaptcha/ReCaptcha'

export const Contact = () => {

    const [isCaptchaVerified, setIsCaptchaVerified] = useState(false)
    const [token, setToken] = useState('')

    useEffect(() => {
        if (token.length) {
            setIsCaptchaVerified(true)
            setTimeout(() => {
                setIsCaptchaVerified(false)
            }, 10000);
        }
    }, [token])


    const initialForm = {
        name: "",
        email: "",
        subject: "",
        message: ""
    }

    const validateForm = (form) => {
        let errors = {}
        let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/
        // let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/
        let regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        // let regexMessage = /^.{1,400}$/

        if (!form.name.trim()) {
            errors.name = "El campo Nombre es requerido"
        } else if (!regexName.test(form.name.trim())) {
            errors.name = "Este campo solo acepta letras y espacios en blanco"
        }

        if (!form.email.trim()) {
            errors.email = "El campo Email es requerido"
        } else if (!regexEmail.test(form.email.trim())) {
            errors.email = "Por favor ingresar un correo válido"
        }

        if (!form.subject.trim()) {
            errors.subject = "El campo Asunto es requerido"
        }

        if (!form.message.trim()) {
            errors.message = "El campo Mensaje es requerido"
        }
        //  else if (!regexMessage.test(form.message.trim())) {
        //     errors.message = "Puede ingresar máximo 500 caracteres"
        // }

        return errors
    }

    const handleRecaptchaVerify = (token) => {
        setToken(token)
    }

    const { formstate, errors, loader, response, hasValidated, onInputChange, handleBlur, handleKeyUp, handleSubmit } = useForm(initialForm, validateForm)
    const { name, email, subject, message } = formstate

    return (
        <section className="contact" id="contact">
            <h2>Contacto/</h2>
            <form onSubmit={handleSubmit} className="contact-form">

                <label htmlFor="name">Nombre: </label>
                <input
                    id='name'
                    className="contact-intext"
                    type="text" name="name"
                    autoComplete="off"
                    value={name} onChange={onInputChange}
                    onKeyUp={handleKeyUp}
                    onBlur={handleBlur}
                />
                {errors.name && <span className="contact-error">{errors.name}</span>}

                <label htmlFor="email">Email: </label>
                <input
                    id='email'
                    className="contact-intext"
                    type="text"
                    name="email"
                    autoComplete="off"
                    value={email}
                    onChange={onInputChange}
                    onKeyUp={handleKeyUp}
                    onBlur={handleBlur}
                />
                {errors.email && <span className="contact-error">{errors.email}</span>}

                <label htmlFor="subject">Asunto: </label>
                <input
                    id='subject'
                    className="contact-intext"
                    type="text"
                    name="subject"
                    autoComplete="off"
                    value={subject}
                    onChange={onInputChange}
                    onKeyUp={handleKeyUp}
                    onBlur={handleBlur}
                />
                {errors.subject && <span className="contact-error">{errors.subject}</span>}

                <label htmlFor="message">Mensaje:</label>
                <textarea
                    id='message'
                    className="contact-intext contact-txtarea"
                    name="message"
                    cols="50"
                    rows="6"
                    maxLength="400"
                    value={message}
                    onChange={onInputChange}
                    onKeyUp={handleKeyUp}
                    onBlur={handleBlur}
                >
                </textarea>
                {errors.message && <span className="contact-error">{errors.message}</span>}
                <div className='recaptcha'>
                    <div className='recaptcha-container'>
                        <ReCaptcha sitekey={'6LcRq8wpAAAAAEwqNFCKvgZIaM9MvgJqJfTjU9ZU'} callback={handleRecaptchaVerify} />
                    </div>
                </div>
                <button className="contact-submit" type="submit" disabled={!hasValidated || Object.keys(errors).length !== 0 || !isCaptchaVerified}>
                    {loader ? <Loader /> : "Enviar"}
                </button>
                <div className="contact-response">
                    {response}
                </div>
            </form>
        </section>
    )
}
