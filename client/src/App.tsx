import { ChakraProvider } from "@chakra-ui/react"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { listenForAuthChange } from "./firebase"
import { Login, Signup } from "./pages"
import { User } from "@firebase/auth-types"
import { userAtom } from "./store"
import { useCallback } from "react"
import { useSetAtom } from "jotai"
import { HomeRoute, PrivateRoutes } from "./components"
import { QueryClient, QueryClientProvider } from "react-query"

const App = () => {
    const queryClient = new QueryClient()

    const setUser = useSetAtom(userAtom)

    const handleAuthChange = useCallback((user:User | null) => {
        setUser(user)
    }, [])

    // keeps track of when users log in or out
    listenForAuthChange(handleAuthChange)

    return (
        <QueryClientProvider client={queryClient}>
            <ChakraProvider>
                <Router>
                    <Routes>
                        <Route path="/" element={<HomeRoute />} />
                        <Route element={<PrivateRoutes authRoute={<Navigate to="/"/>} />}>
                            <Route path="/login" element={<Login />}></Route>
                            <Route path="/signup" element={<Signup />}></Route>
                        </Route>
                    </Routes>
                </Router>
            </ChakraProvider>
        </QueryClientProvider>
    )
}

export default App
