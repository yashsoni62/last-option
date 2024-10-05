import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import Logo from "../../assets/Logo.png"
import UserContext from '../../contexts/UserContext'

const Header = () => {

    const { user, logout, getDetails } = useContext(UserContext);

    useEffect(() => {
        let token = localStorage.getItem("LastOptionToken");
        if (token) {
            getDetails(token);
        }
        // getDetails();
    }, []);

    return (
        <nav>
            <div>
                <img src={Logo} alt="" />
                <h1>LAST OPTION</h1>
            </div>
            <ul>
                <li>
                    <Link to={'/'}>Home</Link>
                </li>
                <li>
                    <Link to={'/about'}>About</Link>
                </li>
                <li>
                    <Link to={'/upload'}>Upload</Link>
                </li>
                {user === null
                    ?
                    <>
                        < li >
                            <Link to={'/login'}>Login</Link>
                        </li>
                        <li>
                            <Link to={'/register'}>Register</Link>
                        </li>
                    </>
                    :
                    <>
                        <p>Hello, {user.name}</p>
                        <button onClick={logout}>Logout</button>
                    </>
                }
            </ul>
        </nav >
    )
}

export default Header;