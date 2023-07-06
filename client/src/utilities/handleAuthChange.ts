import { User } from "@firebase/auth-types"
import { setUser } from "../store"

export const handleAuthChange = (user: User | null) => {
    setUser(user)
}
