import { useSetAtom } from "jotai"
import { userAtom } from "./userAtom"

export const setUser = useSetAtom(userAtom)
