import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    console.log('Home rendered');
    return (
        <div style={{ padding: 20 }}>
            <h2>RealtimeNotify — Demo</h2>
            <p>Use the UI to get token, connect, and test notifications.</p>
            <div style={{ display: 'flex', gap: 10 }}>
                <Link to="/messages"><button className="btn">Go to Messages</button></Link>
                <Link to="/presence"><button className="btn secondary">Presence</button></Link>
            </div>
        </div>
    )
}