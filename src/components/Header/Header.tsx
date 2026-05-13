import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../Logo/Logo";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import styles from "./Header.module.css";



export default function Header(){
    return(
        <header className={styles.header}>
            <Logo />

            <button className={styles.button}>
                <FontAwesomeIcon className={styles.icon} icon={faBars} />
            </button>
        </header>
    );
}