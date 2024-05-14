import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
interface Prl{
  dt:{
    color:string,
    s:number,
    m:number,
    bl:number
  }
}

const Hab=styled.h2`
  font-size:97px;
  font-weight:600;
  position:absolute;
`


const Apex: React.FC<Prl> = (props) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  

  useEffect(() => {
    const canvas = canvasRef.current;
    let aylana:number=props.dt.bl;
    if (canvas) {
      const context = canvas.getContext('2d');
      if (context) {
        context.strokeStyle=props.dt.color;
        context.lineWidth=5;
       

        context.beginPath();
        context.arc(192, 192, 190, 0, aylana, true);
        context.moveTo(200, 300);
        context.stroke();
        context.fillStyle=props.dt.color;
        context.font = "96px Arial";
       
        context.font = "20px Arial";
        context.fillStyle=props.dt.color;
        context.fillText('Lavel', 170, 280)
        context.font = "bold 20px Arial";
        context.fillText('Popular', 160, 310)
       
      }
    }
  }, [props]);

  return (
    <div style={{display:'flex', width:'384px', justifyContent:'center', height:'384px',border:'5px solid  rgba(59, 131, 246, 0.148)', borderRadius:'999px', background:'rgba(59, 131, 246, 0.04)', boxSizing:'border-box', margin:'20px auto', top:'0'}}>
      <Hab style={{color:props.dt.color}}>{`${props.dt.s < 10 ? '0'+props.dt.s:props.dt.s}:${props.dt.m < 10 ? '0'+props.dt.m:props.dt.m}`}</Hab>
        <canvas  width={384} height={384} ref={canvasRef} ></canvas>
    </div>
  );
};

export default Apex;
