import styles from "./AboutProject.module.css"

function AboutProject(){
    return (
        <div className={styles.AboutProjectContainer}>

            <div style={{ borderRadius: "20px", backgroundColor: "#183d6c" , padding : "20px"}}>
                <div className={styles.AboutProjectTitle}> Sobre o projeto </div>
                <div className={styles.AboutProjectText}> 
                    A CalculadorITA surgiu com o propósito de facilitar o cálculo do coeficiente de rendimento (CR) dos alunos do ITA.
                    Tal índice normalmente é utilizado para processos seletivos de empresas ou faculdades internacionais e seu valor costuma 
                    divergir da nota acadêmica do ITA.  
                </div> 
            </div>

            <img src = {require("../../images/international-university.png")} width = "385" alt = "university" style={{ borderRadius: "20px"}}></img>

        </div>
        )
}

export default AboutProject