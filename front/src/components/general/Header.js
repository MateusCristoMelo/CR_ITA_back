import styles from "./Header.module.css"
import {Link} from 'react-router-dom';

function Header(){
    return (

        <div className={styles.HeaderContainer}>

            <Link to = "/" className={styles.HeaderHomepage}> 
                <img style = {{filter : "invert(70%)"}} src = {require("../../images/calculator-logo.png")} width = "100" alt = "homelogo" color="white"></img>
                <div> Homepage </div>
            </Link>
            <Link to = "/dashboard" className={styles.HeaderDashpage}> 
                <img style = {{filter : "invert(70%)"}} src = {require("../../images/dashboard-logo.png")} width = "100" alt = "dashlogo"></img>
                <div> Dashboard </div> 
            </Link>
            <Link to = "/contact" className={styles.HeaderLoginpage}> 
                <img style = {{filter : "invert(70%)"}} src = {require("../../images/user-logo.png")} width = "100" alt = "loginlogo"></img>
                <div> Contato </div>
            </Link>
            <div>
                <img style = {{cursor : "pointer", alignItems : "center"}} src = {require("../../images/ita-logo.png")} alt = "italogo" onClick = {event => window.location.href = 'http://www.ita.br/'} ></img>
            </div>
        </div>

        
        )
}

export default Header