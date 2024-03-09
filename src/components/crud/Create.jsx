import { Link, useNavigate } from 'react-router-dom'
import React, { useState } from 'react'
import '../style crud/create.css'
import { IoCaretBackCircle } from "react-icons/io5";

const Create = () => {
    const [Data,setData] = useState({
       name : "",
       budget : "",
       description: "",
       foodType:"" 
    });


    const handleChange = (e) => {
        let data = {...Data};

        data[e.target.name] = e.target.value;
        setData(data);
    }

    const navigate = useNavigate()
    
    const submit = (e) => {
      e.preventDefault();
      console.log("test");
      fetch("http://localhost:4000/foods",{
          method: "POST",
          headers : {"content-type": "application-json"},
          body: JSON.stringify(Data)
      }).then((res) => {
          alert("You Got It!")
          navigate('/menu')
      })
    };


  return (
    <div className='screen'>
      <div className="b-1"><Link to={"/menu"} ><IoCaretBackCircle className='kembali-ke' /></Link></div>
      <div className="screen-isi">
        <form action="" className='isi-form' onSubmit={submit}>
          <h2>Create Your Own Food!</h2>
          <input
          required
           type="text"
           value={Data.name}
           onChange={handleChange}
           name='name'
           placeholder='What Is The Name Of Your Foods?'
           className='satu'
           />
           <input
          required
           type="number"
           value={Data.budget}
           onChange={handleChange}
           name='budget'
           placeholder='How Much?'
           className='dua'
           />
           <input
          required
           type="text"
           value={Data.description}
           onChange={handleChange}
           name='description'
           placeholder='Please Describe Your Foods'
           className='tiga'
           />
           <input
          required
           type="text"
           value={Data.foodType}
           onChange={handleChange}
           name='foodType'
           placeholder='What Is The Type Of Your Foods'
           className='empat'
           />
           <button type='submit' className='sub-butt'>Create!</button>
        </form>
      </div>
    </div>
  );
};

export default Create
