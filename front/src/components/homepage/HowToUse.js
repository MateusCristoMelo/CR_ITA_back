import styles from "./HowToUse.module.css"

function HowToUse(){
    return (
        <div className={styles.HowToUseContainer}>

            <img src = {require("../../images/internship.png")} width = "385" alt = "internship" style={{ borderRadius: "20px"}}></img>

            <div style={{    borderRadius: "20px", backgroundColor: "#183d6c" , padding : "20px"}}>
                <div className={styles.HowToUseTitle}> Como usar </div>
                <div className={styles.HowToUseText}> 
                    Para utilizar a CalculadorITA basta ir na página de Dashboard e upar seu boletim escolar do ITA, o cálculo do CR e de 
                    outras métricas do aluno são feito automaticamente a partir de um banco de dados que o website possui. Caso queira mandar uma 
                    mensagem para os desenvolvedores relatando bugs da plataforma ou mandando críticas, basta utilizar a página de Contato.

                </div> 
            </div>
 
        </div>
        )
}

export default HowToUse