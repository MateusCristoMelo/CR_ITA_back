import styles from "./Grades.module.css"

function Grades(props){
    return (
        <div className={styles.GradesContainer}>

            <div className={styles.GradesITAGrade}>
                Média simples: {props.nota} 
            </div>

            <div className={styles.GradesITAConcept}>
                Conceito: {props.conceito}
            </div>

            <div className={styles.GradesCR}>
                Coeficiente de rendimento: {props.cr}
            </div>

        </div>
        )
}

export default Grades