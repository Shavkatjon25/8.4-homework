import { FC } from "react"
import styled from "styled-components"

const Sarlavha=styled.h2`
    font-size:20px;
    font-weight:700
`
const Btn=styled.button`
    border:none;
    background: #2563eb;
    color:#fff;
    padding:8px 12px;
    border-radius:0.5rem;
`

const Dv=styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    box-sizing:border-box;
    padding:24px;
    
`


const  Header:FC=()=> {
  return (
    <Dv>
        <Sarlavha>Pomodoro Time</Sarlavha>
        <Btn>New Beta</Btn>
    </Dv>
  )
}

export default Header