import { type LucideIcon } from "lucide-react";

interface FilterCardProps{
    icon?: LucideIcon,
    value: string
}

export default function FilterCard(props: FilterCardProps){

    const IconFilter = props.icon;

    return(
        <div>
           {IconFilter && <IconFilter />}  

            <h2>{props.value}</h2>
        </div>
    );
}