import { FirebaseError } from "firebase/app"

export const handleFirebaseError = (error: FirebaseError) => {
    switch(error.code) {
        case "auth/email-already-in-use": {
            throw new Error('That email is already in use')
        }
        case "auth/user-not-found" || "auth/wrong-password": {
            throw new Error('Incorrect email or password')
        }
        case "auth/too-many-requests": {
            throw new Error('Login attempt limit exceeded. Try again later')
        }
        default: {
            throw new Error('We were unable to verify your login attempt')
        }
    }
}