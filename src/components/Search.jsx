import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import '../components/style/search.css';
import { Link } from "react-router-dom";
import { TbMapPinSearch } from "react-icons/tb";
import { RiDeleteBack2Line } from "react-icons/ri";

const Search = () => {

    const [location, setLocation] = useState([]);
    const [search, setSearch] = useState("");
    const [projectSearch, setProjectSearch] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:4000/cabang")
        .then(e =>e.json())
        .then(e => setLocation(e))

    },[])


    const handleSearch = () =>{
        console.log(location);
        console.log(search);
        const filterData = location.filter((item)=>{
            return item.daerah.toLowerCase().includes(search.toLowerCase())
        })
        
        setProjectSearch(filterData);
        
    }

    const handleCancelSearch =() => {
        setProjectSearch([])
        
    }

    const handleChangeSearch = (e) => {
        const {name,value}= e.target
        console.log(name)
        console.log(value)

        setSearch(value)
    }

  return (
    <>
    <div className="paling-perent">
        
   <div className="parent-wrap">
      <div className="loc-input">
        <button className="btn btn-danger" type="button" onClick={handleCancelSearch}><RiDeleteBack2Line className="cnl-butt"/></button>
        <input name="searchInput" type="text" className="form-control" placeholder="Find The Parviz's In Your City !" onChange={handleChangeSearch}/>
        <button className="btn btn-outline-secondary" type="button" onClick={handleSearch}><TbMapPinSearch className="srch-butt"/></button>
      </div>
    {console.log(projectSearch)}
    {projectSearch && 
        projectSearch.map((item,key) => {
            return(
                <div key={key} className="place-container">
                    <div className="isi">
                        <h1>{item.daerah}</h1>
                        <br />
                        <p>{item.description}</p>
                        <br />
                        <h5>{item.date}</h5>
                        <div className="read-more">
                            <Link to ={"/about"}>
                            <h3>
                                See more !
                            </h3>
                            </Link>
                        </div>
                </div>
            </div>                 
            )
        })
    }
   </div>
    </div>
    </>
  )
}

export default Search
