import logo from "../../assets/logo/logo.png";
import styles from "./Logo.module.css"

export default function Logo(){
    return(
        <img className={styles.logo} src={logo} alt="Logo do site" />
    );
}