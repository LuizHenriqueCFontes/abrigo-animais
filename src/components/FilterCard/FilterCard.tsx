import { type LucideIcon } from "lucide-react";
import styles from "./FilterCard.module.css";

interface FilterCardProps{
    icon?: LucideIcon,
    value: string
}

export default function FilterCard(props: FilterCardProps){

    const IconFilter = props.icon;

    return(
        <button className={styles.filterCard}>
            {IconFilter && <IconFilter className={styles.icon}/>}
            <h2>{props.value}</h2>
        </button>
    );
}