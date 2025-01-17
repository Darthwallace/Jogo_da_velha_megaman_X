import React,{StrictMode, useState} from "react";
import './App.css';
import JogarNovamente from './Components/JogarNovamente'

export default function App(){
   
    const casa={
      width:100,
      height:100,
      display:'flex',
      justifyContent:'center',
      alignItens:'center',
      flexDirection:'row',
      cursor:'pointer',
      fontSize:60,
      border:'1px solid #000'
    }

    const [jogo,setJogo] = useState([['','',''],['','',''],['','','']])

    const [simboloAtual,setSimboloAtual] = useState('X');

    const [jogando,setJogando] = useState(true);

    const tabuleiro=(j)=>{
      return(
         <div className="tabu">
            <div className="tabuLinha">
                <div style={casa} data-pos='00' onClick={(e)=>joga(e)}>{j[0][0]}</div>
                <div style={casa} data-pos='01' onClick={(e)=>joga(e)}>{j[0][1]}</div>
                <div style={casa} data-pos='02' onClick={(e)=>joga(e)}>{j[0][2]}</div>
            </div>
            <div className="tabuLinha">
                <div style={casa} data-pos='10' onClick={(e)=>joga(e)}>{j[1][0]}</div>
                <div style={casa} data-pos='11' onClick={(e)=>joga(e)}>{j[1][1]}</div>
                <div style={casa} data-pos='12' onClick={(e)=>joga(e)}>{j[1][2]}</div>
            </div>
            <div className="tabuLinha">
                <div style={casa} data-pos='20' onClick={(e)=>joga(e)}>{j[2][0]}</div>
                <div style={casa} data-pos='21' onClick={(e)=>joga(e)}>{j[2][1]}</div>
                <div style={casa} data-pos='22' onClick={(e)=>joga(e)}>{j[2][2]}</div>
            </div>
         </div>
      )
    }

    const verificarVitoria=()=>{
      //LINHAS
      let pontos=0;
      let vitoria=false
      for(let l=0;l<3;l++){
        pontos=0;
        for(let c=0;c<3;c++){
          if(jogo[l][c] === simboloAtual){
            pontos++
          }
        }
        if(pontos >= 3){
          vitoria=true;
          break
        }
      }

      //COLUNAS
      for(let c=0;c<3;c++){
        pontos=0
        for(let l=0;l<3;l++){
          if(jogo[l][c] === simboloAtual){
            pontos++
          }
        }
        if(pontos >= 3){
          vitoria=true;
          break
        }

        //DIAGONAIS
        pontos=0;
        for(let d = 0;d<3;d++){
          if(jogo[d][d] === simboloAtual){
            pontos++;
          }
        }
        if(pontos >= 3){
          vitoria=true
        }
        pontos=0;
        let l=0;
        for(let c=2;c>=0;c--){
          if(jogo[l][c] === simboloAtual){
            pontos++
          }
          l++;
        }
        if(pontos >= 3){
          vitoria=true;
        }
          return vitoria
        }
    }    

    const trocaJogador=()=>{
        simboloAtual === 'X'?setSimboloAtual('O'):setSimboloAtual('X')
    }

    const retPos=(e)=>{
      const p=e.target.getAttribute('data-pos');
      const pos=[parseInt(p.substring(0,1)),parseInt(p.substring(1,2))]
      return pos;
    }

    const verEspacoVazio=(e)=>{
      if(jogo[retPos(e)[0]][retPos(e)[1]] === ''){
        return true
      }else{
        return false
      }
    }

    const joga=(e)=>{
      if(jogando){
        if(verEspacoVazio(e)){
          jogo[retPos(e)[0]][retPos(e)[1]]=simboloAtual;
          trocaJogador();
          if(verificarVitoria()){
            trocaJogador();
            alert('Jogador ' + simboloAtual + ' venceu!');
            setJogando(false)
          }
        }else{
          alert('Este espaço não está disponível, escolha outro');
        }
      }
    }

    return(
      <>
         <div>
            <p>Quem joga: {simboloAtual}</p>
         </div>
         <div>
            {tabuleiro(jogo)}
         </div>
         <div>
            <JogarNovamente jogando={jogando} setJogando={setJogando} setJogo={setJogo} setSimboloAtual={setSimboloAtual}/>
         </div>
      </>
  )
}


