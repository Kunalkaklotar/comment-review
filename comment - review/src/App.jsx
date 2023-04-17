import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import { Cart } from './Cart'

function App() {
  let [comments,setComments] = useState()
  let [data, setData] = useState([])
  useEffect(() => {
    apiArray();
  }, [])
  let apiArray = async () => {
    let res = await fetch(`https://dummyjson.com/products?pages=1&limit=16`);
    let req = await res.json();
    setData(req.products)
  }
  let name = useRef()
  let email = useRef()
  let comment = useRef()
  const submit = (e) => {
    e.preventDefault();
    setComments(comment.current.value)
    console.log(comment.current.value)
    if (name.current.value === "") {
      alert("Please write your name.");
      name.current.focus()
    }
    else if (email.current.value === "") {
      alert("Please write your email.");
      email.current.focus()
    }
    else if (comment.current.value === "") {
      alert("Please write your comment.");
      comment.current.focus()
    }
    else {
      alert("Comment sent succefully")
    }
    name.current.value = "";
    email.current.value = "";
    comment.current.value = "";
    name.current.focus();
  }
  return (
    <>
      {data.map((v,i) => {
        return <Cart key={i} {...v} comment={comments} />
      })}
      <section className='comment-section'>
        <div className="container">
          <form onSubmit={submit}>
            <div className="row1">
              Enter your Name : <input type="text" className='text' ref={name} />
              Enter your Email : <input type="email" className='text' ref={email} />
            </div>
            Enter your comments : <input type="text" className='email' ref={comment} />
            <input type="submit" value="Submit" className='submit' />
          </form>
        </div>
      </section>
    </>
  );
}

export default App;
