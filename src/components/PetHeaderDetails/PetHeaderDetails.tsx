import type { LucideIcon } from "lucide-react";
import photo from  "../../assets/petAvatar/cat/luna.png";
import Button from "../Button/Button";
import TagPersonality from "../TagPersonality/TagPersonality";

interface PetHeaderDetailsProps{
    title: string,
    description: string,
    personality: string[],
    detailsTitle: string,
    detailsDescription: string,
    detailsIcon: LucideIcon
}

export default function PetHeaderDetails(props: PetHeaderDetailsProps){
    const DetailsIcon = props.detailsIcon;

    return(
        <article>
            <div>
                <img src={photo} alt={`Foto de perfil ${photo}`} />
            </div>

            <div>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
            </div>

            <div>
                <TagPersonality personality={props.personality}/>
            </div>

            <div>
                <DetailsIcon />
                <p>{props.detailsDescription}</p>
            </div>

            <div>
                <Button variant="primary">
                    {`Quero conhecer a ${props.title}`}
                </Button>

                <Button variant="primary">
                    Falar com a equipe
                </Button>
            </div>
        </article>
    );
}