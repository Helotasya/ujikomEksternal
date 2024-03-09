import React from 'react'
import '../components/style/card.css';
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CiViewList } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";

const Card = () => {

  const [food,setFood] = useState([])

  useEffect(()=>{
    fetch("http://localhost:4000/foods")
    .then(e => e.json())
    .then(e => setFood(e))
  })
  const RemoveItem = (id) => {
    fetch("http://localhost:4000/foods/"+id,{
      method:"DELETE",
    })
    .then((res)=>{
      window.location.reload();
    });
  };

  return (
    <div className='card-container'>
      <div className="container-1">
        <div className="box-1">
          {
            food.map(item=>{
              return(
                <div className='menu-container'>
                <div className="isi">
                <div className="judul">
                <h1>{item.name}</h1>
                </div>
                <div className="menu-box">
                  <div className="menu-1">
                    <h3 type='number'>💲{item.budget}</h3>
                  </div>
                  <div className="menu-1">
                    <i><p>– {item.description}</p></i>
                  </div>
                  <div className="menu-2">
                    <h3>{item.foodType}</h3>
                 
                  </div>
                  <div className="pertombolan">
                    <Link 
                    to={`/view/${item.id}`}
                    className='viewya'
                    ><CiViewList className='vw' />
                    </Link>
                    <Link
                    to={`/edit/${item.id}`}
                    className='editya'
                    >
                    <CiEdit className='edt' />
                    </Link>
                    <button
                    onClick={() =>{
                     RemoveItem(item.id)
                    }}
                    className='deleteya'
                    >
                    <AiOutlineDelete className='dlt' />
                    </button>
                  </div>
                </div>
                </div>
              </div>
              
              )
            })
          }

        </div>
        
      </div>
    </div>
  )
}

export default Card
