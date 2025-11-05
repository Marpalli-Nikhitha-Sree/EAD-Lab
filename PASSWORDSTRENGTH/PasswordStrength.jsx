import React,{useState} from 'react';

const PasswordStrength=()=>{
    const [password,setPassword]=useState("");
    const [strength,setStrength]=useState("");

    const checkStrength=(pwd)=>{
        if(!password) return "";

        if(pwd.length<6) return "weak pwd";
        if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\D).{8,}$/.test(pwd)) return "strong pwd";
        if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\D)/) return "moderate pwd";
        }

    const handleChange=(e)=>{
        const pwd=e.target.value;
        setPassword(pwd);
        setStrength(checkStrength(pwd));
    }
 return(
    <div className="container">
        <center>
            <h1>Password Strength Checker</h1>
            <input type="password" value={password} onChange={handleChange} placeholder="Enter your password"/>
            <h3> {strength}</h3>
        </center>
    </div>
 )
}

export default PasswordStrength;