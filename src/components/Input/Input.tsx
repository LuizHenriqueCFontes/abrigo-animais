interface InputProps{
    id: string,
    value: string,
    onChange: (value: string) => void,
    placeholder?: string,
    type?: string,
    required?: boolean
    label?: string
    icon?: React.ReactNode

}

export default function Input(props: InputProps){
    return(
        <div>
            {props.label && <label htmlFor={props.id}>{props.label}</label>}

            {props.icon && <span>{props.icon}</span>}

            <input
                id={props.id}
                type={props.type}
                value={props.value}
                onChange={(e) => props.onChange(e.target.value)}
                required={props.required}
            />
        </div>
    );
}