import React, { useContext, useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom';
import UserContext from '../../contexts/UserContext'
import { API_BASE_URL } from '../../common/constants'

const Login = () => {

    const navigate = useNavigate();

    const { getDetails } = useContext(UserContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            alert("Please fill all the fields");
            return;
        }

        let body = {
            email: email,
            password: password
        }

        let resp = await fetch(`${API_BASE_URL}/user/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        });
        let data = await resp.json();
        if (data.success === true) {
            alert("Logged in successfully");
            let token = data.token;
            localStorage.setItem('LastOptionToken', token);
            getDetails(token)
            navigate("/");
        }
    }
    return (
        <div className='loginBox'>
            <form onSubmit={handleLoginSubmit} class="login-form" action="login.php" method="post">
                <h1>Sign in</h1>
                <label for="email">Email:</label>
                <input type="email" class="login-input" id="email" name="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter your email" required />
                <label for="password">Password:</label>
                <input type="password" class="login-input" id="password" name="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Enter your password" required />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login;