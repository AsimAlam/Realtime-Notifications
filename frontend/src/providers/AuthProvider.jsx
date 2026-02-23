import React, { createContext, useContext, useState } from 'react'
import { getTokenForUsername } from '../services/authApi'

const AuthContext = createContext()

export function AuthProvider({ children }) {
    const [username, setUsername] = useState(() => sessionStorage.getItem('rn_username') || '')
    const [token, setToken] = useState(() => sessionStorage.getItem('rn_token') || null)

    async function requestToken(name) {
        const res = await getTokenForUsername(name)
        const t = res.token || res
        setToken(t)
        setUsername(name)
        sessionStorage.setItem('rn_token', t)
        sessionStorage.setItem('rn_username', name)
        return t
    }

    function clear() {
        sessionStorage.removeItem('rn_token'); sessionStorage.removeItem('rn_username')
        setToken(null); setUsername('')
    }

    return (
        <AuthContext.Provider value={{ username, token, setUsername, requestToken, clear }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() { return useContext(AuthContext) }