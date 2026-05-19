import Button from "../Button/Button";
import styles from "./PetCard.module.css";

interface PetCardProps{
    photo: string,
    title: string,
    details: string,
    personality: string[]
}

export default function PetCard(props: PetCardProps){
    return(
        <article className={styles.cardContainer}>
            <div className={styles.photo}>
                <img className={styles.photo} src={props.photo} alt={`Imagem do ${props.title}`} />
            </div>

            <div className={`${styles.containerInformation} ${styles.space}`}>
                <h2>{props.title}</h2>

                <p className={styles.details}>{props.details}</p>
            </div>

            <div className={styles.containerPersonality}>
                {props.personality.map((cardPersonality) => (
                    <span className={styles.cardPersonality} key={cardPersonality}>{cardPersonality}</span>
                ))}
            </div>

            <div className={styles.space}>
                <Button variant="primary">
                    Quero adotar
                </Button>
            </div>
        </article>
    );
}