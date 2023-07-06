import { userAtom } from "./userAtom"
import { useAtom } from "jotai"

export const [ user ] = useAtom(userAtom)
