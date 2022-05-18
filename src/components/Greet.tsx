import { GreetProps } from "./Types/Types";

const Greet = ({name, messageCount, isLoggedIn,greet}: GreetProps) => {
    return (
        <div>
            {
                isLoggedIn ? <p>You have {messageCount} unread messages</p> : <h2>Welcome to my {name} website. {greet}</h2>
            }
        </div>
    );
};

export default Greet;