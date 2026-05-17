import { Heart, Search, Smile } from "lucide-react";
import StepCard from "../StepCard/StepCard";
import styles from "./HowItWorks.module.css";

const stepsData = [
    {
        id: 1,
        icon: Search,
        title: "01. Encontre seu amigo",
        description: "Explore nossa lista de pets resgatados e filtre por tamanho, idade e temperamento ideal para sua rotina."
    },
    {
        id: 2,
        icon: Heart,
        title: "02. Faça o pedido",
        description: "Preencha o nosso formulário de adoção responsável para que nossa equipe conheça um pouco mais sobre você."
    },
    {
        id: 3,
        icon: Smile,
        title: "03. Leve para casa",
        description: "Após a aprovação, agendamos o dia do encontro para você buscar o seu novo melhor amigo e ser feliz!"
    }
]

export default function HowItWorks(){
    return(
        <section className={styles.container}>
            <div>
                <h1 className={styles.title}>Como funciona o processo de adoção</h1>
            </div>

            <div className={styles.cardContainer}>
                {stepsData.map((step) => (
                    <StepCard
                        key={step.id} 
                        icon={step.icon}
                        title={step.title}
                        description={step.description}
                    />
                ))}
            </div>
        </section>
    );
}