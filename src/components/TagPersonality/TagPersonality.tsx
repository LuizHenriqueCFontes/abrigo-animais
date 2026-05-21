import styles from "./TagPersonality.module.css";

interface TagPersonalityProps{
    personality: string[]
}

export default function TagPersonality(props: TagPersonalityProps){
    return(
        <div className={styles.containerPersonality}>
            {props.personality.map((valuePersonality) => (
                <span className={styles.cardPersonality}>{valuePersonality}</span>
            ))}
        </div>
    );
}