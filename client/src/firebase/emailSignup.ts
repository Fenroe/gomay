import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "./auth"
import { handleFirebaseError } from "./handleFirebaseError"
import { FirebaseError } from "firebase/app"

export const emailSignup = async (email:string, password:string) => {
    try {
        const credentials = await createUserWithEmailAndPassword(auth, email, password)
        const { user } = credentials
        return user
    } catch (error) {
        if (error instanceof FirebaseError) handleFirebaseError(error)
    }
}