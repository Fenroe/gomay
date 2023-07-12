import { Box, Container, Heading, Text } from "@chakra-ui/react"
import { SignupForm } from "../components"

export const Signup = () => {
    return (
        <Box
        display="flex"
        as="main">
            <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            backgroundColor="#FFA07A"
            width="50%">
                <Heading>Gomay</Heading>
                <Text>Meal prep has never been so simple</Text>
            </Box>
            <Box
            width="50%"
            display="flex">
                <Container maxWidth="sm">
                    <SignupForm />
                </Container>
            </Box>
        </Box>

    )
}
