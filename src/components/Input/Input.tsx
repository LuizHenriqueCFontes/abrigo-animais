import styles from "./Input.module.css";

interface InputProps{
    id: string,
    value: string,
    onChange: (value: string) => void,
    placeholder?: string,
    type?: string,
    required?: boolean,
    label?: string,
    ariaLabel?: string,
    icon?: React.ReactNode,
    variant: "hero",
    className?: string

}

export default function Input(props: InputProps){
    return(
        <div>
            {props.label && <label htmlFor={props.id}>{props.label}</label>}

            {props.icon && <span className={styles.icon}>{props.icon}</span>}

            <input
                id={props.id}
                type={props.type}
                value={props.value}
                onChange={(e) => props.onChange(e.target.value)}
                required={props.required}
                className={`${styles[props.variant]} ${props.className ?? ""}`}
                placeholder={props.placeholder}
                aria-label={props.ariaLabel}
            />
        </div>
    );
}