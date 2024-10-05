import React, { useState } from 'react'
import './Register.css'
import { API_BASE_URL } from "../../common/constants"
import { useNavigate } from "react-router-dom"

const Register = () => {

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegisterSubmit = async (e) => {
        e.preventDefault();
        if (!name || !email || !password) {
            alert("Please fill all the fields");
            return;
        }

        let body = {
            name: name,
            email: email,
            password: password
        }

        let resp = await fetch(`${API_BASE_URL}/user/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        });
        let data = await resp.json();
        if (data.success === true) {
            alert("User registered successfully");
            navigate("/login");
        }
    }

    return (
        <div className='registerBox'>
            <form onSubmit={handleRegisterSubmit} class="register-form" action="register.php" method="post">
                <h1>Create an Account</h1>
                <label for="name">Name:</label>
                <input type="name" class="register-input" id="name" name="name" placeholder="Enter your name" value={name} onChange={e => setName(e.target.value)} required />
                <label for="email">Email:</label>
                <input type="email" class="register-input" id="email" name="email" placeholder="Enter your email" value={email} onChange={e => setEmail(e.target.value)} required />
                <label for="password">Password:</label>
                <input type="password" class="register-input" id="password" name="password" placeholder="Enter your password" value={password} onChange={e => setPassword(e.target.value)} required />
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default Register;