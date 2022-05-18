import Greet from "../Greet";

export const CustomComponent = ({isLoggedIn,messageCount,name,greet}: React.ComponentProps<typeof Greet> ) => {

    return (
        <div>
            {
                isLoggedIn ? <p>You have {messageCount} unread messages</p> : <h2>Welcome to my {name} website. {greet}</h2>
            }
        </div>
    );
};
