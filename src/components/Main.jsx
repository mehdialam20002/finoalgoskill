import React, { useState } from 'react'
import "./style.css"
import Card from './Card'
import Images from './Images'
import { useEffect } from 'react'

export default function Main() {
  const[dis,setDis]=useState("")
  useEffect(()=>{
    let box=document.querySelector(".card-container")
    console.log(box)
    setDis(box)
  },[])
  function scroll_Left(){
    let width=dis.clientWidth
    dis.scrollLeft=dis.scrollLeft-width
  }
  function scroll_Right(){
    let width=dis.clientWidth
    dis.scrollLeft=dis.scrollLeft+width
    console.log(width)
  }
  
  return (
    <div className='success-main'>
      <button className='btn  btn-left' onClick={scroll_Left}>&lt;</button>
      <button className='btn  btn-right' onClick={scroll_Right}>&gt;</button>
      <div className="card-container">
      {
        Images.map((item,i)=>(
          <Card key={i} image={item}/>
        ))
      }
      </div>
    </div>
  )
}
