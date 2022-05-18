import { useContext } from "react";
import { UserContext } from "./UserContext";

export const User3 = () => {
     const userContextObject = useContext(UserContext);

    const handleLogin = () => {
        const newUser = {
            name: 'body sohel',
            email: 'bodysohel@gmail.com'
        }
        userContextObject?.setUser(newUser);
    }
    const handleLogout = () => {
        userContextObject?.setUser(null);
    }
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User name is {userContextObject?.user?.name}</div>
            <div>User email is {userContextObject?.user?.email}</div>
        </div>
    )
}