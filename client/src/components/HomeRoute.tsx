import { useAtomValue } from "jotai"
import { userAtom } from "../store"
import { Dashboard, Landing } from "../pages"

export const HomeRoute = () => {
    // "/" is different depending on whether the user
    // is logged in or not
    // This component checks auth state and returns the
    // correct page
    const user = useAtomValue(userAtom)

    if (user === undefined) return <h1>Loading</h1>
    if (user === null) return <Landing />
    return <Dashboard />
}
