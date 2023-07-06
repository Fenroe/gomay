import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "./auth"

export const emailSignup = async (email:string, password:string) => {
    try {
        const credentials = await createUserWithEmailAndPassword(auth, email, password)
        const { user } = credentials
        return user
    } catch (err) {
        console.log(err)
    }
}