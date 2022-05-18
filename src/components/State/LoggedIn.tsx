import { useState } from "react"

export const LoggedIn = () => {

    const [isLoggedIn, setLoggedIn] = useState<number | boolean>(false);

    const handleLogin = () => {
        setLoggedIn(true);
    }
    const handleLogout = () => {
        setLoggedIn(0);
    }
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User is {isLoggedIn ? 'logged in' : 'logged out'}</div>
        </div>
    )
}