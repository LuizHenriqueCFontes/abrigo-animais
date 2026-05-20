import { Briefcase, Building, Cat, CircleCheck, Fence, Ghost, Heart, Home, House, PawPrint, ShieldCheck, Users, Volleyball } from "lucide-react";
import PetHeaderDetails from "../../components/PetHeaderDetails/PetHeaderDetails";
import styles from "./PetDetails.module.css";

const petData = {

    headerDetails: {
        name: "Luna", description: "3 meses • Porte pequeno ",
        personality: ["Carinhosa", "Curiosa", " Calma"],
        details: {
            title: "Vacinada, vermifugada e castrada",
            description: "Pronta para encontrar um lar cheio de amor!",
            icon: ShieldCheck
        }
    },

    history: {
        historyTitle: "História da Luna",

        description: "Luna foi encontrada sozinha em uma caixinha de papelão ao lado de uma estrada. Estava assustada, com fome e muito carente. Hoje, está em segurança no abrigo, recebeu todo o cuidado que precisava e se transformou em uma gatinha alegre, saudável e cheia de amor para dar.",

        highlight: "Luna é aquela amiga que chega devagar, mas quando confia, se entrega por completo.",     
    },

    personality: {
        personalityTitle: {
            title: "Personalidade",
        },

        tags: [
            {id: 1, icon: "volleyball", text: "Ama brincar com bolinhas e brinquedos"},
            {id: 2, icon: "cat", text: "Adora carinho e costuma ronronar muito"},
            {id: 3, icon: "users", text: "Se dá bem com outros gatos"},
            {id: 4, icon: "ghost", text: "Um pouco tímida no começo, mas logo se solta"},
            {id: 5, icon: "home", text: "Gosta de ambientes tranquilos e seguros"}
        ]
    },

    informations: {
        informationsTitle: {
            title: "Informações",
        },

        tags: [
            { id: 1, label: "Idade",       value: "3 meses" },
            { id: 2, label: "Sexo",        value: "Fêmea" },
            { id: 3, label: "Porte",       value: "Pequeno" },
            { id: 4, label: "Peso",        value: "1,2 kg (aprox.)" },
            { id: 5, label: "Cor",         value: "Tigrada cinza" },
            { id: 6, label: "Localização", value: "Abrigo Feliz - São Paulo/SP" }
        ]
    },

    health: {
        healthTitle: {
            title: "Saúde"
        },

        tags: [
            {id: 1, text: "Vacinada"},
            {id: 2, text: "Vermifugada"},
            {id: 3, text: "Castrada"},
            {id: 4, text: "Exame de FIV/FELV negativo"},
            {id: 5, text: "Microchipada"},
        ]
    },

    condition: {
        conditionTitle: {
            title: "Ideal para"
        },

        tags: [
            {id: 1, icon: "building", text: "Apartamentos"},
            {id: 2, icon: "fence", text: "Casas sem rota de fuga"},
            {id: 3, icon: "users", text: "Famílias com crianças maiores"},
            {id: 4, icon: "cat", text: "Lares que já possuam outros gatos"}
        ]
    }
}

const iconPageMap = {
    "volleyball": Volleyball,
    "cat": Cat,
    "users": Users,
    "ghost": Ghost,
    "home": Home,
    "building": Building,
    "fence": Fence
}

export default function PetDetails(){

    return(
        <section className={styles.detailsContainer}>
            <PetHeaderDetails {...petData.headerDetails}/>

            <section className={styles.infoContainer}>

                <div className={styles.infoTitle}>

                    <Heart className={styles.iconTitle}/>
                    <h1>{petData.history.historyTitle}</h1>

                </div>

                <p className={styles.infoText}>{petData.history.description}</p>

                <blockquote className={styles.highlightContainer}>
                    {petData.history.highlight}
                </blockquote>
            </section>

            <hr className={styles.sectionDivider}/>

            <section className={styles.infoContainer}>
                <div className={styles.infoTitle}>
                    <PawPrint className={styles.iconTitle}/>
                    <h1>{petData.personality.personalityTitle.title}</h1>
                </div>

                <div>
                    <ul className={styles.personalityContainer}>
                        {petData.personality.tags.map((personality) => {
                            //as keyof typeof iconpagemap, significa eu aceitar valores de icon somente que sao chaves que estao dentro do meu iconPageMap
                            const TagIcon = iconPageMap[personality.icon as keyof typeof iconPageMap];

                            return(
                                <li className={styles.listContainer} key={personality.id}>
                                    {TagIcon && <TagIcon className={styles.listIcons}/>}
                                    {personality.text}
                                </li>
                            );
                        })} 
                    </ul>
                </div>
            </section>

            <hr className={styles.sectionDivider}/>

            <section className={styles.infoContainer}>
                <div className={styles.infoTitle}>
                    <Briefcase className={styles.iconTitle}/>
                    <h1>{petData.informations.informationsTitle.title}</h1>
                </div>

                <div>
                    <ul>
                        {petData.informations.tags.map((tag) => (
                            <li className={styles.tableList} key={tag.id}>
                                <span>{tag.label}</span>
                                <span>{tag.value}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <hr className={styles.sectionDivider}/>

            <section className={styles.infoContainer}>
                <div className={styles.infoTitle}>
                    <ShieldCheck className={styles.iconTitle}/>
                    <h1>{petData.health.healthTitle.title}</h1>
                </div>

                <div>
                    <ul className={styles.personalityContainer}>
                        {petData.health.tags.map((tag) => (
                            <li className={styles.listContainer} key={tag.id}>
                                <CircleCheck className={`${styles.listIcons} ${styles.healthIcons}`}/>
                                {tag.text}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <hr className={styles.sectionDivider}/>      
                    
            <section className={styles.infoContainer}>
                <div className={styles.infoTitle}>
                    <House className={styles.iconTitle}/>
                    <h1>{petData.condition.conditionTitle.title}</h1>
                </div>

                <div>
                    <ul className={styles.personalityContainer}>
                        {petData.condition.tags.map((tag) => {
                            const TagIcon = iconPageMap[tag.icon as keyof typeof iconPageMap];

                            return(
                                <li className={styles.listContainer} key={tag.id}>
                                    {TagIcon && <TagIcon className={styles.listIcons}/>}
                                    {tag.text}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </section>
        </section>  
    );
}