import React from 'react'

export default function PresenceList({ onlineUsers = [], currentUser }) {
    const filtered = (onlineUsers || []).filter(u => u && u !== currentUser)
    return (
        <div>
            <div style={{ fontSize: 12, color: '#6b7280', marginBottom: 6 }}>Online</div>
            {filtered.length === 0 && <div style={{ color: '#9ca3af' }}>No users online</div>}
            {filtered.map(u => (
                <div key={u} style={{ display: 'flex', gap: 10, alignItems: 'center', padding: '6px 0' }}>
                    <div style={{ width: 36, height: 36, borderRadius: 18, background: '#6f8cff', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>
                        {u[0].toUpperCase()}
                    </div>
                    <div>
                        <div style={{ fontWeight: 700 }}>{u}</div>
                        <div style={{ fontSize: 12, color: '#6b7280' }}>online</div>
                    </div>
                </div>
            ))}
        </div>
    )
}