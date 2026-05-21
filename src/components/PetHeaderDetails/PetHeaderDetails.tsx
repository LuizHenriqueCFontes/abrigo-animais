import type { LucideIcon } from "lucide-react";
import photo from  "../../assets/petAvatar/cat/luna.png";
import Button from "../Button/Button";
import TagPersonality from "../TagPersonality/TagPersonality";
import styles from "./PetHeaderDetails.module.css";

interface PetHeaderDetailsProps{
    name: string,
    description: string,
    personality: string[],
    details: {
        title: string,
        description: string,
        icon: LucideIcon
    }
}

export default function PetHeaderDetails(props: PetHeaderDetailsProps){
    const DetailsIcon = props.details.icon;

    return(
        <article className={styles.cardContainer}>
            <div>
                <img className={styles.photo} src={photo} alt={`Foto de perfil ${photo}`} />
            </div>

            <div className={`${styles.containerInformation} ${styles.space}`}>
                <h2>{props.name}</h2>

                <p className={styles.details}>{props.description}</p>
            </div>

            <div>
                <TagPersonality personality={props.personality}/>
            </div>

            <div className={styles.description}>
                <DetailsIcon className={styles.iconDescription}/>

                <h3 className={styles.descriptionTitle}>{props.details.title}</h3>

                <p className={styles.descriptionMessage}>{props.details.description}</p>
            </div>

            <div className={styles.space}>
                <Button variant="primary">
                    {`Quero conhecer a ${props.name}`}
                </Button>

                <Button variant="primary">
                    Falar com a equipe
                </Button>
            </div>
        </article>
    );
}