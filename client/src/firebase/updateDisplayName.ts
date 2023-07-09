import { updateProfile, User } from "firebase/auth"

export const updateDisplayName = async (user: User, displayName: string) => {
    // @ts-ignore ts(2345)
    await updateProfile(user, {
        displayName
    })
}
