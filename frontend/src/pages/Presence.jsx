import React, { useEffect, useState } from 'react'
import PresenceList from '../components/PresenceList'
import { fetchPresence } from '../services/presenceApi'

export default function Presence() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        let id = null
        async function poll() {
            try {
                const r = await fetchPresence()
                setUsers(r.users || [])
            } catch {
                console.error('Failed to fetch presence')
            }
        }
        poll()
        id = setInterval(poll, 5000)
        return () => clearInterval(id)
    }, [])
    return (
        <div style={{ padding: 20 }}>
            <h3>Presence</h3>
            <PresenceList onlineUsers={users} currentUser="" />
        </div>
    )
}