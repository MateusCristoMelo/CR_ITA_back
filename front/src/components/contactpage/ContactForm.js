import styles from "./ContactForm.module.css"

function ContactForm(){
  
  function SendEmail (){
    alert("Email enviado! Agradecemos o contato")
  }

    return (
        <div className={styles.ContactContainer}>
          <div />
            <div style={{borderRadius: "20px", backgroundColor: "#183d6c" , padding : "20px"}}>
              <form onSubmit={SendEmail}>
                <div style={{fontSize : "xx-large"}}> Remetente: </div>
                <input type="text" style = {{width : "300px", textAlign : "left"}}></input>
                <div style={{fontSize : "xx-large"}}> Mensagem: </div>
                <textarea type="text" style = {{height : "200px", width : "300px", textAlign : "left"}}></textarea>
                <div> <input type="submit"></input> </div>
              </form>
            </div>
          <div /> 
        </div>
        )
}

export default ContactForm