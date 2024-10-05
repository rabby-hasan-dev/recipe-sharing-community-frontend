
"use client"

import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from "react";

import { getCurrentUser } from "../services/AuthService";
import { ICurrentUser } from "../types";

interface IUserProviderValues {
    user: ICurrentUser | null;
    isLoading: boolean;
    setUser: (user: ICurrentUser | null) => void;
    setIsLoading: Dispatch<SetStateAction<boolean>>

}


export const UserContext = createContext<IUserProviderValues | undefined>(undefined);

const UserProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<ICurrentUser | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleUser = async () => {
        const user = await getCurrentUser();
        setUser(user);
        setIsLoading(false);
    }

    useEffect(() => {
        handleUser()

    }, [isLoading])

    return (

        <UserContext.Provider value={{ user, setUser, isLoading, setIsLoading }} >
            {children}
        </UserContext.Provider>
    )

}





export default UserProvider;