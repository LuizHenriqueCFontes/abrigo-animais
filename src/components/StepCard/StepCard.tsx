import type { LucideIcon } from "lucide-react";
import IconBox from "../IconBox/IconBox";
import styles from "./StepCard.module.css";

interface StepCardProps{
    icon: LucideIcon,
    title: string,
    description: string
}

export default function StepCard(props: StepCardProps){
    return(
        <div className={styles.cardContainer}>
            <div className={styles.iconArea}>
                <IconBox variant="primary" icon={props.icon}/>
            </div>

            <div>
                <h2 className={styles.title}>{props.title}</h2>
                <p className={styles.description}>{props.description}</p>
            </div>

        </div>
    );
}