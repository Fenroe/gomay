import { useAtomValue } from "jotai"
import React from "react"
import { userAtom } from "../store"
import { Outlet } from "react-router-dom"

type Props = {
    authRoute?: React.ReactNode;
    unauthRoute?: React.ReactNode;
}

export const PrivateRoutes = ({ authRoute, unauthRoute }: Props) => {
    const user = useAtomValue(userAtom)

    if (user === undefined) return <h1>Loading</h1>
    if (user === null) return unauthRoute || <Outlet />
    return authRoute || <Outlet />
}
