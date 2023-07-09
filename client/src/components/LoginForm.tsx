import { Link, VStack, Heading, Text, ButtonGroup, Button, FormControl, FormErrorIcon, FormErrorMessage } from "@chakra-ui/react"
import { Form, Formik } from "formik"
import { Link as RouterLink } from "react-router-dom"
import { TextField } from "./TextField"
import { useLoginData } from "../hooks"

export const LoginForm = () => {
    const { initialValues, validationSchema, handleSubmit, authenticationError } = useLoginData()

    return (
        <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}>
            <Form>
                <VStack
                width="100%"
                h="100vh"
                justifyContent="center">
                    <Heading>Log In</Heading>
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
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Email"/>
                    <TextField
                    label="Password"
                    name="password"
                    type="password"
                    placeholder="Password"/>
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
                        variant="outline"
                        width="100%">
                            Continue With Google
                        </Button>
                    </ButtonGroup>
                    <Text>Don&apos;t have an account? <Link as={RouterLink} to="/signup">Sign up!</Link></Text>
                </VStack>
            </Form>
        </Formik>
    )
}
