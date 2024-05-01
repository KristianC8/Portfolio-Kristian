import { useState } from "react"
import { helpHttp } from "../helpers/helpHTTP"


export const useForm = (intialForm = {}, validateForm) => {

    const [formstate, setFormstate] = useState(intialForm)
    const [errors, setErrors] = useState({})
    const [hasValidated, setHasValidated] = useState(false)
    const [loader, setLoader] = useState(false)
    const [response, setResponse] = useState('')

    const onInputChange = (e) => {
        const { name, value } = e.target
        setFormstate({
            ...formstate,
            [name]: value
        })
    }

    const handleBlur = (e) => {
        onInputChange(e)
        setErrors(validateForm(formstate))

        setHasValidated(true)
    }

    const handleKeyUp = (e) => {
        onInputChange(e)
        setErrors(validateForm(formstate))

        setHasValidated(true)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoader(true)
        setFormstate(intialForm)
        window.grecaptcha.reset()
        helpHttp().post("https://formsubmit.co/ajax/f4e4d2495663830c9aa11c3b2fcf74a5", {
            body: formstate,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        }).then(res => {
            setLoader(false)
            setResponse('Envío Exitoso')
            setHasValidated(false)
            console.log(res)
            setTimeout(() => {
                setResponse('')
            }, 5000);
        })

        // if (!hasValidated || Object.keys(errors).length === 0) {

        // } else {
        //     return
        // }
    }

    return {
        formstate,
        errors,
        loader,
        hasValidated,
        response,
        onInputChange,
        handleBlur,
        handleKeyUp,
        handleSubmit
    }
}
