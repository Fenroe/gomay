import { Link as RouterLink } from "react-router-dom"
import { Link } from "@chakra-ui/react"

export const Landing = () => {
    return (
        <main>
            <h1>Landing Page</h1>
            <Link as={RouterLink} to="/login">Log in</Link>
            <Link as={RouterLink} to="/signup">Sign up</Link>
        </main>
    )
}
