import Logo from "../Logo/Logo";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";

export default function Header(){
    return(
        <header>
            <Logo />

            <nav>
                <ul>
                    <li><FontAwesomeIcon icon={faPaw} /></li>
                </ul>
            </nav>
        </header>
    );
}