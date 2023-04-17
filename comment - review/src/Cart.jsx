import React, { useState } from 'react'

export const Cart = (props) => {
   let [comment,setComment] = useState(props.comment);
   return (
      <div>
         <div className="container">
            <div className="row">
               <div className="image">
                  <img src={props.thumbnail} alt='' />
               </div>
               <div className="content">
                  <h1 className="title">{props.title}</h1>
                  <p className="description">{props.description}</p>
                  <span className="price">{props.price}$</span>
                  <div className="rating">{props.rating}<i class="fa-solid fa-star"></i></div>
                  <p>Comments : {props.comment}</p>
               </div>
            </div>
         </div>
      </div>
   )
}