import { useState } from "react";
import Input from "../../components/Input/Input";
import FilterCard from "../../components/FilterCard/FilterCard";
import { Cat, Dog, LayoutGrid } from "lucide-react";
import luna from "../../assets/petAvatar/cat/luna.png";
import PetCard from "../../components/PetCard/PetCard";

const petCardData = [
    {
        id: 1, photo: luna, title: "Luna ", details: "3 meses • Porte pequeno ", personality: [
            "Carinhosa ", "Curiosa", " Calma"
        ]
    }
]


const filterCardData = [
    {
        id: 1, icon: LayoutGrid, value: "Todos"
    },

    {
        id: 2, icon: Dog, value: "Cachorros"
    },

    {
        id: 3, icon: Cat, value: "Gatos"
    }
]

export default function PetSearch(){
    const [findPet, setFindPet] = useState("");

    return(
        <section>
            <h1>Nossos animais</h1>
            <p>Cada um deles sonha com lar cheio de amor.</p>
            <p>Encontre quem espera por você.</p>

            <Input id="find-pet" variant="hero" ariaLabel="find-pet" placeholder="Busque por nome, porte ou personalidade..." value={findPet} onChange={setFindPet}/>

            {filterCardData.map((cardFilter) => (
                <FilterCard 
                    key={cardFilter.id}
                    icon={cardFilter.icon}
                    value={cardFilter.value}
                />
            ))}

           
            {petCardData.map((pet) => (
                <PetCard 
                    key={pet.id}
                    photo={pet.photo}
                    title={pet.title}
                    details={pet.details}
                    personality={pet.personality}
                />
            ))}

        </section>
    );
}