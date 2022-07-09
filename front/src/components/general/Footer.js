import styles from "./Footer.module.css"

function Footer(){
    return (
        <div className={styles.FooterContainer}>
            <p className={styles.FooterText}> Website developed by: Erigod, Jack and Buga. Made in 2022 </p>
        </div>
        )
}

export default Footer