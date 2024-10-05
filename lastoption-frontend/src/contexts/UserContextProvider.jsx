import React, { useState } from 'react'
import UserContext from './UserContext'
import { API_BASE_URL } from '../common/constants'

const UserContextProvider = ({ children }) => {

    const [user, setUser] = useState(null)

    const getDetails = async (token) => {
        if (token) {
            let resp = await fetch(`${API_BASE_URL}/user/getUserInfo`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ token })
            });
            let data = await resp.json();
            setUser(data.user)
        }
    }

    const logout = () => {
        localStorage.removeItem('LastOptionToken')
        setUser(null)
    }

    return (
        <UserContext.Provider value={{ user, getDetails, logout }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;