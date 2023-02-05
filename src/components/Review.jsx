import React from 'react'
import { faker } from '@faker-js/faker';
import ReviewCard from './ReviewCard';
import "./style.css"
import { useEffect } from 'react';
import { useState } from 'react';
export default function Review() {
  let reviews = [...Array(20)].map(() => {
    return (
      {
        avtar: faker.image.avatar(),
        comment: faker.name.jobTitle()+faker.name.jobTitle(),
        name: faker.internet.userName(),
        data: "IIT JEE .15k learning min"
      }
    )
  })
  faker.seed(21);
  const[data,setData]=useState("")
  useEffect(()=>{
    let box=document.querySelector(".reviews");
    setData(box)
  },[])

  function lessThenSign(){
    let width=data.clientWidth;
    data.scrollLeft=data.scrollLeft-width
  }
  function greaterThenSign(){
    let width=data.clientWidth;
    data.scrollLeft=data.scrollLeft+width
  }
  return (
    <div className='review-container slider'>
      <div className='review-heading slider'>
        <h4 style={{marginBottom:"40px",color:"#3c4852",marginLeft:"10px"}}>What our learners are saying</h4>
        <div style={{alignSelf:"center"}}>
        <button className='button' onClick={lessThenSign}>&lt;</button>
        <button className='button' onClick={greaterThenSign}>&gt;</button>
        </div>
      </div>
      <div className='reviews'>
        {
          reviews.map((item,i) => (
            <ReviewCard items={item} key={i}/>
          ))
        }
      </div>
    </div>
  )
}