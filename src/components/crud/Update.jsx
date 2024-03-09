import React, { useEffect,useRef,useState} from "react";
import {Link, useNavigate, useParams} from 'react-router-dom';
import '../style crud/edit.css'
import { IoCaretBackCircle } from "react-icons/io5";


const Update = () =>{
    const navigate = useNavigate();
    const {id} = useParams();
    const [Data, setData] = useState({
        id:" ",
        name:" ",
        budget:" ",
        description:" ",
        foodType:" "
    });

    const formRef = useRef()

    useEffect(()=>{
        fetch('http://localhost:4000/foods'+id)
        .then((req) =>{
            return req.json();
        })
        .then((resp) =>{
            setData(resp)
        });
    },[]);

    const handleChange = (e) =>{
        let data = {...Data};

        data[e.target.name] = e.target.value;
        setData(data);
    }
   
    const submit = (e) => {
        e.preventDefault();
        console.log("test");
        // if (!username) return alert("Login terlebih dahulu!");
        fetch('http://localhost:4000/foods/'+id,{
            method:"PUT",
            headers:{"content-type":"application/json"},
            body: JSON.stringify(Data),
        })
        .then((res) => {
            alert("Yay, your data has been updated!");
            navigate('/menu');
        });
        


      };

    return(
        <div className="screen-update">
            <div className="bl">
            <Link to={"/menu"}><IoCaretBackCircle className="kmbli-k"/></Link>
            </div>
            <div className="page-update">
                <form
                action=""
                className="form-sub"
                onSubmit={submit}
                >
                    <h2 className="dataku">You Can Evaluate Your Data Here !</h2>
                    <input 
                    type="text"
                    value={Data.name}
                    onChange={handleChange}
                    name="name" 
                    placeholder="Masukan nama makanan"
                    className="lima" 
                    />
                    <input 
                    required
                    type="number"
                    value={Data.budget}
                    onChange={handleChange}
                    name="budget" 
                    placeholder="Masukan harga"
                    className="enam" 
                    />
                    <input
                    type="text"
                    value={Data.description}
                    onChange={handleChange}
                    name="description" 
                    placeholder="Masukan deskripsi"
                    className="tujuh" 
                    />
                    <input 
                    required
                    type="text"
                    value={Data.typeMeal}
                    onChange={handleChange}
                    name="foodType" 
                    placeholder="Masukan type makanan"
                    className="delapan" 
                    />
                    <button type="submit"
                    className="kirim-button">
                        Update
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Update;