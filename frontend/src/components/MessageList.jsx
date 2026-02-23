import React, { useEffect, useRef } from 'react'
import { format } from 'date-fns'

export default function MessageList({ messages = [], currentUser }) {
    const ref = useRef(null)
    useEffect(() => { if (ref.current) ref.current.scrollTop = ref.current.scrollHeight + 200 }, [messages])

    return (
        <div ref={ref} style={{ padding: 18, overflow: 'auto', display: 'flex', flexDirection: 'column', gap: 12 }}>
            {messages.map((m, i) => {
                const me = m._me || m.from === currentUser
                return (
                    <div key={m.id || i} style={{ display: 'flex', justifyContent: me ? 'flex-end' : 'flex-start' }}>
                        {!me && <div style={{ width: 36, height: 36, borderRadius: 18, background: '#9be7ff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: 10 }}>{(m.from || 'U').slice(0, 1).toUpperCase()}</div>}
                        <div style={{
                            maxWidth: '65%', padding: 12, borderRadius: 12,
                            background: me ? 'linear-gradient(90deg,#3b82f6,#2563eb)' : '#f3f4f6',
                            color: me ? '#fff' : '#111827', boxShadow: '0 6px 18px rgba(16,24,40,0.06)'
                        }}>
                            <div style={{ fontWeight: 700 }}>{me ? 'You' : (m.from || m.toUserId)}</div>
                            <div style={{ marginTop: 8 }}>{m.payload || m.content}</div>
                            <div style={{ marginTop: 8, fontSize: 12, color: '#6b7280', display: 'flex', gap: 8, alignItems: 'center' }}>
                                <div>{m.seq != null ? `#${m.seq}` : ''}</div>
                                <div>{m.createdAt ? format(new Date(m.createdAt), 'p, MMM d') : ''}</div>
                                <div style={{ marginLeft: 8, color: m.delivered ? '#0ea5a4' : '#9ca3af' }}>{m.delivered ? '✓ Delivered' : (me ? 'Pending' : '')}</div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}