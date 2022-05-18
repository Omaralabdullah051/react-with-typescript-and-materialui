//* here we used Omit keyword to restrict the children props as React.ReactNode 
//* We are just specifies that children must be a string

type ButtonProps = {
    variant:'primary' | 'secondary',
    children: string
} & Omit<React.ComponentProps<'button'>, 'children'> 

export const CustomButton = ({variant, children, ...rest}: ButtonProps) => {
    return <button className={`class-with-${variant}`} {...rest}>{children}</button>    
}