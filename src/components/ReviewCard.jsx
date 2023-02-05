import React from 'react'
import "./reviewCardStyle.css"
 const ReviewCard = ({items}) => {
  return (
    <div className='review-card-container'>
        <img src={items.avtar} alt="avtar" width="65px" style={{borderRadius:"15%"}} />
        <h5 style={{color:"#3c4852",fontSize:"13px"}}>{items.comment}</h5>
        <h5 style={{color:"#3c4852",fontSize:"13px"}}>{items.name}</h5>
        <p style={{color:"#3c4851",fontSize:"12px",marginTop:"-10px"}}>{items.data}</p>
    </div>
  )
}
export default ReviewCard
