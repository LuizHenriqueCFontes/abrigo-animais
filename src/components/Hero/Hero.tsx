import { useState } from "react";
import dog from "../../assets/hero/dog-hero.png";
import Input from "../Input/Input";
import Button from "../Button/Button";
import styles from "./Hero.module.css";
import { useNavigate } from "react-router-dom";

export default function Hero(){
    const [find, setFind] = useState("");
    const navigate = useNavigate();

    function handleGoToSearchPets(){
        navigate("/pet-search");
    }

    return(
        <article className={styles.heroContainer}>
            <img className={styles.dog} src={dog} alt="Cachorro esperando ser adotado" />

            <section className={styles.titles}>
                <h1 className={styles.heroTitle}><span className={styles.titleCostumizer}>Adote</span> seu cachorro, para ser seu melhor amigo a todo momento</h1>

                <p className={styles.heroDescription}>Centenas de cães e gatos em abrigos locais esperam por um lar amoroso. Encontre o seu par perfeito</p>
            </section>

            <section>
                <form>
                    <Input className={styles.form} ariaLabel="Pesquisar abrigo ou cidade" id="find" value={find} onChange={setFind} placeholder="Pesquisar por Cidade ou Abrigo" variant="hero"/>

                    <Button onClick={handleGoToSearchPets} className={styles.form} variant="primary">Encontrar Amigo</Button>
                </form>
            </section>
        </article>

    );
}