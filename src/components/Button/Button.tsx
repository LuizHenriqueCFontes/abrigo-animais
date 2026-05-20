import styles from "./Button.module.css";

interface ButtonProps{
    children: React.ReactNode,
    variant: "primary" | "secondary"
    className?: string
    onClick?: () => void
}

export default function Button(props: ButtonProps){
    
    return(
        <button onClick={props.onClick} className={`${styles[props.variant]} ${props.className ?? ""}`}> {props.children} </button>
    );
}