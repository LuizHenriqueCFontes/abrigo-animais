import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import TagPersonality from "../TagPersonality/TagPersonality";
import styles from "./PetCard.module.css";

interface PetCardProps{
    photo: string,
    title: string,
    details: string,
    personality: string[]
}

export default function PetCard(props: PetCardProps){
    const navigate = useNavigate();

    function handleGoToPetDetails(){
        navigate("/pet-details");
    }

    return(
        <article className={styles.cardContainer}>
            <div className={styles.photo}>
                <img className={styles.photo} src={props.photo} alt={`Imagem do ${props.title}`} />
            </div>

            <div className={`${styles.containerInformation} ${styles.space}`}>
                <h2>{props.title}</h2>

                <p className={styles.details}>{props.details}</p>
            </div>

            <TagPersonality personality={props.personality}/>

            <div className={`${styles.space}`}>
                <Button onClick={handleGoToPetDetails} className={styles.button} variant="primary">
                    Quero adotar
                </Button>
            </div>
        </article>
    );
}