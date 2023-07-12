import * as Yup from 'yup'
import { continueWithGoogle, emailSignup, updateDisplayName } from "../firebase"
import { requiredFieldErrorMessage } from "../data"
import { useNavigate } from 'react-router-dom'
import { FormikHelpers } from 'formik'
import { useCallback, useState } from 'react'

type handleSubmitArgs = {
    values: {
        firstName: string;
        lastName: string;
        email: string;
        password: string;
        confirmPassword: string;
    },
    actions: FormikHelpers<{
        firstName: string;
        lastName: string;
        email: string;
        password: string;
        confirmPassword: string;
    }>
}

export const useSignupData = () => {
    const initialValues = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    }

    const validationSchema = Yup.object({
        firstName: Yup.string()
            .required(requiredFieldErrorMessage),
        lastName: Yup.string()
            .required(requiredFieldErrorMessage),
        email: Yup.string()
            .required(requiredFieldErrorMessage)
            .email('Please enter a valid email address'),
        password: Yup.string()
            .required(requiredFieldErrorMessage)
            .min(7, 'Your password is too short'),
        confirmPassword: Yup.string()
            .required(requiredFieldErrorMessage )
            .oneOf([Yup.ref('password')], 'Passwords must be identical ')
    })

    const [authenticationError, setAuthenticationError] = useState<string>("")

    const navigate = useNavigate()

    const handleSubmit = useCallback(async (values: handleSubmitArgs["values"], actions: handleSubmitArgs["actions"]) => {
        try {
            setAuthenticationError("")
            actions.setSubmitting(true)
            const user = await emailSignup(values.email, values.password)
            if (user === undefined) throw new Error('There was a problem with your request')
            await updateDisplayName(user, `${values.firstName} ${values.lastName}`)
            navigate('/')
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