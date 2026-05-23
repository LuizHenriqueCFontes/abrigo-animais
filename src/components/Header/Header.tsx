import { useState } from "react";
import Logo from "../Logo/Logo";
import styles from "./Header.module.css";
import { Menu } from "lucide-react";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";


interface HeaderProps{
    className?: string
}


export default function Header(props: HeaderProps){
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    function handlerGoToPetSearch(){
        navigate("/pet-search");
    }

    return(
        <header className={`${styles.header} ${props.className ?? ""}`}>
            <Logo />

            <button 
                aria-label="abrir menu"
                onClick={() => setIsMenuOpen((prev) => !prev)}
                className={styles.button}>
                <Menu className={styles.icon} />
            </button>

           {isMenuOpen && 
                <div
                    className={styles.overlay}
                    onClick={() => setIsMenuOpen(false)}
                />
            }

            <nav className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ""}`}>
                <ul>
                    <li><a href="#">Início</a></li>
                    <li><a href="#">Nossos animais</a></li>
                    <li><a href="#">Como ajudar</a></li>
                    <li><a href="#">Voluntariado</a></li>
                    <li><a href="#">Contato</a></li>
                </ul>

                <Button onClick={handlerGoToPetSearch} className={styles.adopt} variant="primary">
                    Quero adotar
                </Button>
            </nav>

        </header>
    );
}