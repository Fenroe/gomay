import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "./auth"

export const emailLogin = async (email:string, password:string) => {
    try {
        const credentials = await signInWithEmailAndPassword(auth, email, password)
        const { user } = credentials
        return user
    } catch (err) {
        console.log(err)
    }
}