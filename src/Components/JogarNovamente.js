import React from 'react'
import Reiniciar from './Reiniciar'

const JogarNovamente = ({jogando,setJogando,setJogo,setSimboloAtual}) => {
    
        if(!jogando){
            return <Reiniciar setJogando={setJogando} setJogo={setJogo} setSimboloAtual={setSimboloAtual}/>
        }
    }

export default JogarNovamente;