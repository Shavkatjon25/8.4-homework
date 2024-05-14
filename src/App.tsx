import { FC, useState } from "react"
import Header from "./component/Header"
import styled from "styled-components"
import Holat from "./component/Holat"
import Apex from "./component/Apex"


const Dv=styled.div`
  display:flex;
  flex-direction:column;
  width: 1024px;
  margin:0 auto;
`
const Why=styled.h3`
    font-weight: 900;
    font-size: 1.25rem;
    line-height: 1.75rem;
    margin:0 auto;
`

const Btn=styled.button`
  width:auto;
  border:none;
  background: #2563eb;
  color:#fff;
  height: 70px;
  width: 384px;
  border-radius:2rem;
  font-size:1.5rem;
  font-weight:600;
  margin:0 auto;
  margin-top:20px;
`
interface Prl{
  color:string,
  s:number,
  m:number,
  bl:number;

}

const pom:Prl={color:'#2563eb', s:20, m:0, bl:0}
const res:Prl={color:'#059669', s:5, m:0, bl:0}

if (localStorage.getItem('l')) {
  localStorage.setItem('l', 'assssssss')
  localStorage.setItem('p', JSON.stringify({k:0}));
  localStorage.setItem('r', JSON.stringify({k:0}));
  localStorage.setItem('l', JSON.stringify({k:0}));
}



const App:FC=()=> {
  const [ht, setHt]=useState<Prl>({color:'#2563eb', s:20, m:0 , bl:0});
  const [bl, setBl]=useState<'pomo' | 'rest' | 'long'>('pomo');
  const [st, setSt]=useState<'STOP'|'START'>('START')
  const Boshla=()=>{
      setSt('STOP')
      let obj={...ht};
      let x:number=-6.29*(obj.s)**(-1)
       const setIn=setInterval(()=>{ 
        if (obj.m==0) {
          if (obj.s==0) {
            setSt('START')
            setHt(obj.color!='#2563eb' ? pom : res);
            if (obj.color!='#2563eb') {
              setBl('pomo')
              localStorage.setItem('r', JSON.stringify({k:JSON.parse(localStorage.getItem('r')!).k+1}))
            }else {
              setBl('rest')
              localStorage.setItem('p', JSON.stringify({k:JSON.parse(localStorage.getItem('p')!).k+1}))
            }
            clearInterval(setIn);
              return;
          } else{
            obj={...obj, s:obj.s-1, m:59, bl:obj.bl+x}
          }       
        }else{
          obj={...obj, m:obj.m-1};
        }
        setHt(obj);
       
      }, 10)
     
    
      
   
  }

  const Ozgar=(el:Prl)=>{
      if (el.s==20) {
          setBl("pomo")
      }else{
        if (el.s==5) {
          setBl('rest')
        }else setBl('long')
      }
      setHt(el);
  } 

  return (
    <Dv>
        <Header/>
        <Why>Why don't you take challange? 😏</Why>
        <Holat fn={Ozgar} bl={bl}/>
       <Apex dt={ht}/>
        <Btn onClick={Boshla}>{st}</Btn>
   </Dv>
  )
}

export default App