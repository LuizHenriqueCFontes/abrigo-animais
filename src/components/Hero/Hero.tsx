import { useState } from "react";
import dog from "../../assets/hero/dog-hero.png";
import Input from "../Input/Input";
import Button from "../Button/Button";

export default function Hero(){
    const [find, setFind] = useState("");

    return(
        <article>
            <img src={dog} alt="Cachorro esperando ser adotado" />

            <section>
                <h1>Adote seu cachorro, para ser seu melhor amigo a todo momento</h1>
                <p>Centenas de cães e gatos em abrigos locais esperam por um lar amoroso. Encontre o seu par perfeito</p>
            </section>

            <section>
                <Input ariaLabel="Pesquisar abrigo ou cidade" id="find" value={find} onChange={setFind} placeholder="Pesquisar por Cidade ou Abrigo" variant="hero"/>

                <Button variant="primary">Encontrar Amigo</Button>
            </section>
        </article>

    );
}