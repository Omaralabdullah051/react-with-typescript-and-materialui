//This component doen't support any external props which is not used in input tag.

type InputPorps = React.ComponentProps<'input'>

export const Input2 = (props: InputPorps) => {
    return (
        <input {...props}/>
    );
};
