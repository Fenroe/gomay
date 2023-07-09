import { ChakraProvider } from "@chakra-ui/react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { listenForAuthChange } from "./firebase"
import { Landing, Login, Signup } from "./pages"
import { User } from "@firebase/auth-types"
import { userAtom } from "./store"
import { useSetAtom } from "jotai"
import { useCallback } from "react"

const App = () => {
    const setUser = useSetAtom(userAtom)

    const handleAuthChange = useCallback((user:User | null) => {
        setUser(user)
    }, [])

    // keeps track of when users log in or out
    listenForAuthChange(handleAuthChange)

    return (
        <ChakraProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Landing />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/signup" element={<Signup />}></Route>
                </Routes>
            </Router>
        </ChakraProvider>
    )
}

export default App