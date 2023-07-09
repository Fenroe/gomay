import { signOut } from "firebase/auth"
import { auth } from "./auth"

export const logout = () => {
    try {
        signOut(auth)
    } catch (error) {
        console.log(error)
    }
}