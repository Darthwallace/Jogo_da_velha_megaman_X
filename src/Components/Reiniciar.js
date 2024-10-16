import React from 'react'

const Reiniciar = ({setJogando,setJogo,setSimboloAtual}) =>{

 const reiniciar = () => {
    const jogoInicial = [
        ['','',''],
        ['','',''],
        ['','','']
    ]
    setJogando(true);
    setJogo(jogoInicial)
    setSimboloAtual('X');
    }

    return(
        <button onClick={reiniciar}>Tente novamente</button>
    )
}



export default Reiniciar;