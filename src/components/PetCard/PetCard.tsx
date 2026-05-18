import Button from "../Button/Button";

interface PetCardProps{
    photo: string,
    title: string,
    details: string,
    personality: string
}

export default function PetCard(props: PetCardProps){
    return(
        <article>
            <div>
                <img src={props.photo} alt={`Imagem do ${props.title}`} />
            </div>

            <div>
                {props.title}
                {props.details}
                {props.personality}
            </div>

            <div>
                <Button variant="primary">
                    Quero adotar
                </Button>
            </div>
        </article>
    );
}