import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../Logo/Logo";
import { faBars } from "@fortawesome/free-solid-svg-icons";



export default function Header(){
    return(
        <header>
            <Logo />

            <FontAwesomeIcon icon={faBars} />
        </header>
    );
}