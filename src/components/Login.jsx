import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../components/style/login.css';


export default function Login() {
    const formRef = useRef();
    const [allData, setAllData] = useState();
    const navigate = useNavigate();
  
    useEffect(() => {
        fetch("http://localhost:4000/user")
        .then(e => e.json())
        .then(e => setAllData(e))
    }, []);

  
    const submit = (e) => {
      e.preventDefault();
      // if (checkUser) return alert("Anda telah login!");
      const { [0]: username, [1]: password } = formRef.current;
  
      if (username.value.length <= 0 || password.value.length <= 0) return alert("input tidak boleh kosong!");
  
      const matchUsername = allData.find((i) => i.name == username.value);
      const matchPassword = matchUsername?.password == password.value;
  
      if (matchUsername && matchPassword) {
        localStorage.setItem("unique_id", matchUsername.id);
        localStorage.setItem("username", username.value);
        navigate("/");
        window.location.reload();
      } else {
        return alert("akun tidak terdaftar");
      }
    };
    return (
      <div className='frst'>
        <div className="lgn"><h1>Login</h1></div>
  
        <form action="" ref={formRef}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
  
          <button onClick={submit}>submit</button>
        </form>
        </div>
        )
}
