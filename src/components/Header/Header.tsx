import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../Logo/Logo";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import styles from "./Header.module.css";

interface HeaderProps{
    classname?: string
}


export default function Header(props: HeaderProps){
    return(
        <header className={`${styles.header} ${props.classname ?? ""}`}>
            <Logo />

            <button className={styles.button}>
                <FontAwesomeIcon className={styles.icon} icon={faBars} />
            </button>
        </header>
    );
}