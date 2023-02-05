import React from 'react'
import "./card-style.css"
 const Card = (props) => {
  return (
    <div className='card-image'>
        <img src={props.image} alt="image"/>
    </div>
  )
}
export default Card
