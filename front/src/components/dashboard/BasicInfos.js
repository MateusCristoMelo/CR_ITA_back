import React, {useState} from "react"
import styles from "./BasicInfos.module.css"
import get from 'axios'

function BasicInfos(props){


	


    
    return (
        <div className={styles.BasicInfosContainer}>
            <div className={styles.BasicInfosName}>
                Nome: {props.nome}
            </div>

            <div className={styles.BasicInfosEng} key={props.curso}>
                Curso: {props.curso}
            </div>
            
            <div className={styles.BasicInfosPDF}>
                <div> Boletim: </div>
                <div style = {{alignSelf: "center", height:"100%"}}>
                    <input type="file" name="pdf" onChange={props.changeHandler} style ={{color : "green", width : "290px"}}/>
                </div>  
                <div onClick={props.handleSub} style = {{cursor : "pointer", color : "green"}}> Enviar </div>
            </div>  

        </div>
        )
}

export default BasicInfos