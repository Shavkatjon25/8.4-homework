import styled from "styled-components"
import React, { FC } from 'react';

interface MyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  bg: boolean;
}


const Pomo=styled.button<MyButtonProps>`
    font-size:20px;
    border:none;
    background: inherit;
    border-bottom:${(props:any)=>props.bg ? '1px solid': 'none'};
    padding:8px 24px ;
    color: #2563eb;
`
const O=styled.span`
    font-size:20px;
    font-weight:900;
`

const Rest=styled.button<MyButtonProps>`
    font-size:20px;
    border:none;
    background: inherit;
    border-bottom:${(props:any)=>props.bg ? '1px solid': 'none'};
    padding:8px 24px ;
    color: #059669;
`

const Long=styled.button<MyButtonProps>`
    font-size:20px;
    border:none;
    background: inherit;
    border-bottom:${(props:any)=>props.bg ? '1px solid': 'none'};
    padding:8px 24px ;
    color: #059669;
`
const Dv=styled.div`
display:flex;
margin: 0 auto;

`

interface Prl{
  color:string,
  s:number,
  m:number,
  bl:number
}

interface Fn{
  fn:()=>void
}

const Holat:FC<any | Fn>=(props)=> {

  const pom:Prl={color:'#2563eb', s:20, m:0, bl:0}
  const res:Prl={color:'#059669', s:5, m:0, bl:0}
  const long:Prl={color:'#059669', s:15, m:0, bl:0}
 
  

  return (
    <Dv>
        <Pomo onClick={()=>props.fn(pom)} bg={props.bl=='pomo'}>Pomodoro <O>{JSON.parse(localStorage.getItem('p')!).k}</O></Pomo>
        <Rest onClick={()=>props.fn(res)} bg={props.bl=='rest'}>Rest <O>{JSON.parse(localStorage.getItem('r')!).k}</O></Rest>
        <Long onClick={()=>props.fn(long)} bg={props.bl=='long'}>Long Rest <O>{JSON.parse(localStorage.getItem('l')!).k}</O></Long>
    </Dv>
  )
}

export default Holat