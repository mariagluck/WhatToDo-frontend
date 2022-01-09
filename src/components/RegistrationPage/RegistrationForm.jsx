import axios from 'axios';
import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import "./RegistrationForm.scss";

export default function RegistrationForm() {
  const [user, setUser] = useState({
    name:"",
    email:"",
    password:""
  })
  const [err, setErr] = useState([]);
  const navigate = useNavigate();
  // const [myError, setMyError] = useState("")

  const handleChange = (e) => {
    const {name, value} = e.target
    setUser({
      ...user, [name]: value
    })
  }

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   setErr([]);
    
  //   const {name, email, password} = user
  //   if(name && email && password){
  //      axios.post("/users/", user)
  //      .then(response => setMyError(response.data.error)
  //      )
      
  //   } else {
  //     alert("invalid input")
  //   }
  // }

  // const handleSubmit = (e) => {
  //       e.preventDefault();
  //       setErr([]);
  //       axios({
  //           url: '/users/',
  //           method: 'POST',
  //           data: user
  //       }).then((res) => {
  //           console.log(res.data);
  //           if (res.data.errors) {
  //               setErr([...res.data.errors]);
  //           } else {
  //               alert('Successfully Registered')
  //           }
  //       }).catch(err => {
  //           console.log(err.errors);
  //       })
  //   }
  

  

const handleSubmit = (e) => {
        e.preventDefault();
        console.log("User registered");
        const { name, email, password } = user;
        if (name && email && password) {
            axios
                .post("/users", user)
                .then((response) => {
                    navigate("/login");
                })
                .catch((err) => {
                    console.log(err.response);
                    if (err.response.data.errors) {
                        setErr(err.response.data.errors);
                    }
                });
        }
    };


  return (
    <form onSubmit={handleSubmit} className="register-form">
      <label htmlFor="name">NAME</label>
      <input 
        type="text"  
        name="name"
        value={user.name}
        onChange={handleChange}
      />
      <label htmlFor="email">EMAIL</label>
      <input 
        type="text" 
        name="email"
        value={user.email}
        onChange={handleChange}
      />

      {/* <span>{myError ? myError : null }</span> */}

      <label htmlFor="password">PASSWORD</label>
      <input 
        type="password" 
        name="password"
        value={user.password}
        onChange={handleChange}
      />

      <ul>
        {err?.map((e) => (
        <li>{e}</li>
        ))}
      </ul>

      <input type="submit" value="Register"/>
    </form>
  );
}