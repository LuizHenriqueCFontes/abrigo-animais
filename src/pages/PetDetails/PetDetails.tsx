import { ShieldCheck } from "lucide-react";
import PetHeaderDetails from "../../components/PetHeaderDetails/PetHeaderDetails";

const petHeaderDetails = {
    id: 1,
    title: "Luna",
    description: "3 meses • Porte pequeno ",
    personality: [
        "Carinhosa ", "Curiosa", " Calma"
    ],
    detailsTitle: "Vacinada, vermifugada e castrada",
    detailsDescription: "Pronta para encontrar um lar cheio de amor!",
    detailsIcon: ShieldCheck
}

export default function PetDetails(){
    return(
        <PetHeaderDetails {...petHeaderDetails}/>
    );
}