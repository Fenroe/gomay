import { onAuthStateChanged } from "firebase/auth"
import { auth } from "./auth"
import { User } from "@firebase/auth-types"

export const listenForAuthChange = (callback:(user:User) => void) => {
    onAuthStateChanged(auth, (user) => {
        callback(user as User)
    })
}
