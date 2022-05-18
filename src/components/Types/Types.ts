export type GreetProps = {
    name: string,
    messageCount: number,
    isLoggedIn : boolean,
    greet?: string,
}

export type Name = {
        first: string,
        last: string
}

export type PersonProps = {
    name: Name
}