import React from 'react'

export default function Composer({ text, setText, sendPrivate, sendRest }) {
    return (
        <div style={{ display: 'flex', gap: 8, padding: 12, borderTop: '1px solid #eef2f7' }}>
            <input className="input" placeholder="Write a message..." value={text} onChange={e => setText(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') sendPrivate() }} />
            <button className="btn" onClick={sendPrivate}>Send</button>
            <button className="btn secondary" onClick={sendRest}>Send via REST</button>
        </div>
    )
}