import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "./auth"
import { FirebaseError } from "firebase/app"
import { handleFirebaseError } from "./handleFirebaseError"

export const emailLogin = async (email:string, password:string) => {
    try {
        const credentials = await signInWithEmailAndPassword(auth, email, password)
        const { user } = credentials
        return user
    } catch (error) {
        if (error instanceof FirebaseError) handleFirebaseError(error)
    }
}