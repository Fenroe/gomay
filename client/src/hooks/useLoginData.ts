import * as Yup from 'yup'
import { continueWithGoogle, emailLogin } from "../firebase"
import { requiredFieldErrorMessage } from "../data"
import { useNavigate } from 'react-router-dom'
import { FormikHelpers } from 'formik'
import { useCallback, useState } from 'react'

type handleSubmitArgs = {
    values: {
        email: string;
        password: string;
    },
    actions: FormikHelpers<{
        email: string;
        password: string;
    }>
}

export const useLoginData = () => {
    const initialValues = {
        email: "",
        password: ""
    }
    
    const validationSchema = Yup.object({
        email: Yup.string()
            .required(requiredFieldErrorMessage)
            .email('Please enter a valid email address'),
        password: Yup.string()
            .required(requiredFieldErrorMessage)
            .min(7, 'Your password is too short')
    })

    const [authenticationError, setAuthenticationError] = useState<string>("")

    const navigate = useNavigate()

    const handleSubmit = useCallback(async (values: handleSubmitArgs["values"], actions: handleSubmitArgs["actions"]) => {
        try {
            setAuthenticationError("")
            actions.setSubmitting(true)
            await emailLogin(values.email, values.password)
            navigate("/")
        } catch (error) {
            if (error instanceof Error) setAuthenticationError(error.message)
        } finally {
            actions.setSubmitting(false)
            actions.resetForm()
        }
    }, [])

    const googleLogin = useCallback(async () => {
        try {
            setAuthenticationError("")
            await continueWithGoogle()
            navigate("/")
        } catch (error) {
            if (error instanceof Error) setAuthenticationError(error.message)
        }
    }, [])

    return {
        initialValues,
        validationSchema,
        authenticationError,
        handleSubmit,
        googleLogin
    }
}