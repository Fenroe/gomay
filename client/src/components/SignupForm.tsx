import { Link, VStack, Heading, Text, ButtonGroup, Button, FormControl, FormErrorIcon, FormErrorMessage } from "@chakra-ui/react"
import { Form, Formik } from "formik"
import { Link as RouterLink } from "react-router-dom"
import { TextField } from "./TextField"
import { useSignupData } from "../hooks"

export const SignupForm = () => {
    const { initialValues, validationSchema, handleSubmit, authenticationError, googleLogin } = useSignupData()

    return (
        <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}>
            <Form>
                <VStack
                h="100vh"
                justifyContent="center">
                    <Heading>Sign Up</Heading>
                    <FormControl isInvalid={authenticationError !== ""}>
                        <FormErrorMessage
                        display="flex"
                        alignItems="center"
                        justifyContent="center">
                            <FormErrorIcon />
                            {authenticationError}
                        </FormErrorMessage>
                    </FormControl>
                    <TextField
                    label="First Name"
                    name="firstName"
                    type="text"
                    placeholder="First Name"/>
                    <TextField
                    label="Last Name"
                    name="lastName"
                    type="text"
                    placeholder="Last Name"/>
                    <TextField
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Email"/>
                    <TextField
                    label="Password"
                    name="password"
                    type="password"
                    placeholder="Password"/>
                    <TextField
                    label="Confirm Password"
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm Password"/>
                    <ButtonGroup
                    flexDirection="column"
                    alignItems="center"
                    gap="0.5rem">
                        <Button
                        type="submit"
                        variant="outline"
                        width="100%"
                        formNoValidate>
                            Continue
                        </Button>
                        <Button
                        onClick={googleLogin}
                        variant="outline"
                        width="100%">
                            Continue With Google
                        </Button>
                    </ButtonGroup>
                    <Text>Already have an account? <Link as={RouterLink} to="/login">Log in!</Link></Text>
                </VStack>
            </Form>
        </Formik>
    )
}
