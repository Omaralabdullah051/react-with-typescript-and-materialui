export type ProfileProps = {
    name: string
}

export const Profile = ({name}: ProfileProps) => {
    return (
        <div>
            Welcome to your profile {name}
        </div>
    )
}