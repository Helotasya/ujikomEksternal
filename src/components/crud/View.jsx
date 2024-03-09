import React, { useEffect, useState } from "react";
import {Link, useParams} from "react-router-dom";
import '../style crud/view.css'
import { IoCaretBackCircle } from "react-icons/io5";

const View = () =>{
    const [data,setData]=useState([])
    const {id}=useParams()

    useEffect(()=>{
        fetch("http://localhost:4000/foods/"+id)
        .then((res)=>res.json())
        .then((json)=> setData(json))
    },[])

    return (
        <div className="screen-view">
            <div className="balik">
            <Link to={'/menu'} className="go-view"><IoCaretBackCircle className="blk"/></Link>
            </div>
            <div className="view-kotak">
                <h1>{data.name}</h1>
                <h3>💲{data.budget}</h3>
                <i><p>– {data.description}</p></i>
                <h2>{data.foodType}</h2>
            </div>
        </div>
        
    )
}

export default View