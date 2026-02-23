import React from 'react';

export default function Header({ username, connected, onGetToken, onConnect, onDisconnect }) {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 12 }}>
            <div style={{ fontWeight: 700, color: '#2563eb' }}>RealtimeNotify</div>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                <div style={{ fontSize: 13, color: '#6b7280' }}>{username || 'Not logged'}</div>
                <div style={{ width: 10, height: 10, borderRadius: 6, background: connected ? '#0ea5a4' : '#f59e0b' }} />
                {!connected && <button className="btn" onClick={onGetToken}>Get Token</button>}
                {!connected && <button className="btn" onClick={onConnect}>Connect</button>}
                {connected && <button className="btn secondary" onClick={onDisconnect}>Disconnect</button>}
            </div>
        </div>
    );
}