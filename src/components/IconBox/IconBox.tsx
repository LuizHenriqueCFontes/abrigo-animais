import type { LucideIcon } from "lucide-react";
import styles from "./IconBox.module.css";

interface IconBoxProps{
    icon: LucideIcon,
    variant: "primary",
    className?: string
}

export default function IconBox(props: IconBoxProps){
    const IconBox = props.icon;

    return(
        <div>
            <IconBox className={`${styles[props.variant]} ${props.className ?? ""}`}/>
        </div>
    );

}