import { createContext, useState } from "react";

export const UserContext = createContext<User | null>(null);

type UserContextComponentProps = {
    children: React.ReactNode
}

type AuthUser = {
    name: string,
    email: string
}

type User = {
    user: AuthUser | null,
    setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>
}

export const UserContextComponent = ({children}: UserContextComponentProps) => {
    const [user,setUser] = useState<AuthUser | null>(null);
     return (
         <UserContext.Provider value={{user,setUser}}>
           {children}
         </UserContext.Provider>
     )
}

