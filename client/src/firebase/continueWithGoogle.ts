import { googleProvider } from "./googleProvider"
import { auth } from "./auth"
import { signInWithPopup } from "firebase/auth"
import { FirebaseError } from "firebase/app"
import { handleFirebaseError } from "./handleFirebaseError"

export const continueWithGoogle = async () => {
    try {
        const credential = await signInWithPopup(auth, googleProvider)
        const { user } = credential
        return user
    } catch (error) {
        if (error instanceof FirebaseError) handleFirebaseError(error)
    }
}