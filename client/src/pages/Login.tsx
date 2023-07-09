import { Box, Container } from "@chakra-ui/react"
import { LoginForm } from "../components"

export const Login = () => {
    return (
        <Box
        display="flex"
        as="main">
            <Box
            backgroundColor="#FFA07A"
            width="50%"/>
            <Box
            width="50%"
            display="flex">
                <Container maxWidth="sm">
                    <LoginForm />
                </Container>
            </Box>
        </Box>
    )
}
