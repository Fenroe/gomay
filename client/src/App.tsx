import { ChakraProvider } from "@chakra-ui/react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { listenForAuthChange } from "./firebase"
import { handleAuthChange } from "./utilities"

const App = () => {
    // keeps track of when users log in or out
    listenForAuthChange(handleAuthChange)

    return (
        <ChakraProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<AuthWrapper refuseAuth><Login /></AuthWrapper>}/>
                    <Route path="/signup" element={<AuthWrapper refuseAuth><Signup /></AuthWrapper>} />
                    <Route path="/dashboard" element={<AuthWrapper><Dashboard /></AuthWrapper>} />
                </Routes>
            </Router>
        </ChakraProvider>
    )
}

export default App