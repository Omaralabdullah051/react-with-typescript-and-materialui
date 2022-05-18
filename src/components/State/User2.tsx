//useState type assertion

import { useState } from "react";

type AuthUser = {
    name: string,
    email: string
}

export const User2 = () => {
    const [user, setUser] = useState<AuthUser>({} as AuthUser);

    const handleLogin = () => {
        const newUser = {
            name: 'body sohel',
            email: 'bodysohel@gmail.com'
        }
        setUser(newUser);
    }
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <div>User name is {user.name}</div>
            <div>User email is {user.email}</div>
        </div>
    )
}