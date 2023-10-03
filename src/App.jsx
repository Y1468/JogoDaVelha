import React,{useState} from 'react'
import './App.css'

export default function App() {
  const jogoInicial=[
    ['','',''],
    ['','',''],
    ['','','']
  ]
  const [jogo,setJogo]=useState([['','',''],['','',''],['','','']])
  const [simboloAtual,setSimboloAtual]=useState('X')
  const [jogando,setJogando]=useState(true)

   function tabuleiro(j){
     return(
       <div style={tabu}>
         <div style={linha}>
          <div style={casa} data-pos='00'onClick={(e)=>jogar(e)}>{j[0][0]}</div>
          <div style={casa} data-pos='01'onClick={(e)=>jogar(e)}>{j[0][1]}</div>
          <div style={casa} data-pos='02'onClick={(e)=>jogar(e)}>{j[0][2]}</div>
         </div>

         <div style={linha}>
          <div style={casa} data-pos='10'onClick={(e)=>jogar(e)}>{j[1][0]}</div>
          <div style={casa} data-pos='11'onClick={(e)=>jogar(e)}>{j[1][1]}</div>
          <div style={casa} data-pos='12'onClick={(e)=>jogar(e)}>{j[1][2]}</div>
         </div>

         <div style={linha}>
          <div style={casa} data-pos='20'onClick={(e)=>jogar(e)}>{j[2][0]}</div>
          <div style={casa} data-pos='21'onClick={(e)=>jogar(e)}>{j[2][1]}</div>
          <div style={casa} data-pos='22'onClick={(e)=>jogar(e)}>{j[2][2]}</div>
         </div>
       </div>
     )
   }
     function jNovamente() {
       if(!jogando){
         return <button onClick={()=>reiniciar()}>
           Jogar novamente
         </button>
       }
     }
    function vVitoria(){
      let pontos=0
      let vitoria=false
      for(let l=0;l<=3;l++){
        pontos=0
        
      for(let c=0;c<=3;c++){
        if(jogo[l][c]==simboloAtual){
          pontos++
        }
      }
       if(pontos>=3){
         vitoria=true
         break
        
       }
      }
      
      for(let c=0;c<3;c++){
        pontos=0
         for(let l=0;l<3;l++){
          if(jogo[l][c]==simboloAtual){
             pontos++    
          }    
        }
        if(pontos<=3){
           vitoria=true
            break
        }
      }
      pontos=0
    for(let d=0;d<3;d++){
      
        if(jogo[d][d]==simboloAtual){
           pontos++
      }
    }
      if(pontos>=3){
        vitoria=true
    
      }
      pontos=0
      let l=0
      for(let c=2;c>=0;c--){
        if(jogo[l][c]==simboloAtual){
          pontos++
        }
        l++
      }
      if(pontos>=3){
        vitoria=true 
      }
     return vitoria
    }
  
   function tJogador(){
     simboloAtual=='X'? setSimboloAtual('O'):setSimboloAtual('X')
   }
  
   function posicao(e){
     const p=e.target.getAttribute('data-pos')
     const pos=[parseInt(p.substring(0,1)),parseInt(p.substring(1,2))]
     return pos
   }
   function esVazio(e) {
     if(jogo[posicao(e)[0]][posicao(e)[1]]==''){
       return true
     }else{
       return false
     }
   }

   function jogar(e){
     if(jogando){
       if (esVazio(e)) {
         jogo[posicao(e)[0]][posicao(e)[1]]=simboloAtual
         tJogador()
         
      if (vVitoria()) {
        tJogador()
        alert('Jogador'+simboloAtual+'venceu!')
        setJogando(false)
      }
       }else{
         alert('Este espaso não esta disponivel,escolha outro')
       }
     }
   }

   function reiniciar() {
     setJogando(true)
     setJogo(jogoInicial)
     setSimboloAtual('X')
   }

  return (
    <div>
     <p>Quem joga:{simboloAtual}</p>
     <div>
       {tabuleiro(jogo)}
     </div>

      <div>
        {jNovamente()}
      </div>
    </div>
  )
}

const tabu={
  display:'flex',
  flexDirection:'column',    
}
const linha={
  display:'flex',
  flexDirection:'row',
}
const casa={
  width:100,
  height:100,
  display:'flex',
  justifyContent:'center',
  flexDirection:'row',
  cursor:'pointer',
  fontSize:60,
  border:'1px solid #000',
}
