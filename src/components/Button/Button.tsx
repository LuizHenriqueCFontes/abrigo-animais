import styles from "./Button.module.css";

interface ButtonProps{
    children: React.ReactNode,
    variant: "primary"
    className?: string
}

export default function Button(props: ButtonProps){
    
    return(
        <button className={`${styles[props.variant]} ${props.className ?? ""}`}> {props.children} </button>
    );
}