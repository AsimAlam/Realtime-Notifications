import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { AuthProvider } from './providers/AuthProvider'
import { SocketProvider } from './providers/SocketProvider'
import './styles.css'

createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <AuthProvider>
            <SocketProvider>
                <App />
            </SocketProvider>
        </AuthProvider>
    </React.StrictMode>
)