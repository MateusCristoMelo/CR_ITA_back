import BasicInfos from '../components/dashboard/BasicInfos';
import Elective from '../components/dashboard/Elective';
import Grades from '../components/dashboard/Grades';
import React, { useState } from 'react';
  
function Dashboard() {
    const [curso, setCurso] = useState('-');
    const [total_eletivas, setEletivas] = useState(0);
    const [cr, setCr] = useState(0);
    const [media_simples, setMedia] = useState(0);
    const [conceito, setConceito] = useState('-');
    const [nome, setNome] = useState('-');
    const [creditos_total, setCreditosTotal] = useState('0');

    const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);


      
    const changeHandler = (event) => {
      setSelectedFile(event.target.files[0]);
      setIsFilePicked(true);
    };

    async function handleSubmission() {

      const formData = new FormData();
      formData.append('file', selectedFile)
      let response =  await (await fetch('http://127.0.0.1:8000/core_api/get_data/', {
        method:'POST',
        body: formData
      })).json()
    
      // setEletivas (response.total_eletivas)
      setCurso (response.curso)
      setEletivas(parseFloat(response.total_eletivas).toFixed(1))
      setMedia(parseFloat(response.media_simples).toFixed(2))
      setCr(parseFloat(response.cr).toFixed(2))
      setNome(response.nome)


      let grade_fixed = parseFloat(response.cr).toFixed(1);
      if (grade_fixed >= 9.5){
        setConceito('L');
      } else if (grade_fixed >= 8.5){
        setConceito('MB');
      } else if (grade_fixed >= 7.5){
        setConceito('B');
      } else if (grade_fixed >= 6.5){
        setConceito('R');
      } else if (grade_fixed >= 5.5){
        setConceito('I');
      } else setConceito('D');
      

      if (response.curso.includes('Mecânica')){
        setCreditosTotal('18');
      } else if (response.curso.includes('Aeronáutica')){
        setCreditosTotal('A - 22  B - 16');
      } else if (response.curso.includes('Eletrônica')){
        setCreditosTotal('18');
      } else if (response.curso.includes('Eletrônica')){
        setCreditosTotal('18');
      } else if (response.curso.includes('Civil')){
        setCreditosTotal('A - 8  B - 22');
      } else if (response.curso.includes('Computação')){
        setCreditosTotal('24');
      } else if (response.curso.includes('Aeroespacial')){
        setCreditosTotal('A - 17  B - 8')
      }
    };


    return (
      <div>
        <BasicInfos curso = {curso} nome={nome} handleSub = {handleSubmission} changeHandler = {changeHandler}/> 
        <Elective creditos_atuais = {total_eletivas} creditos_totais = {creditos_total} />
        <Grades nota = {media_simples} conceito = {conceito} cr = {cr}/>
      </div> 
    );
  }

  export default Dashboard