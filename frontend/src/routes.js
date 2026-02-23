import React from 'react'

const Home = React.lazy(() => import('./pages/Home.jsx'))
const Messages = React.lazy(() => import('./pages/Messages.jsx'))
const Presence = React.lazy(() => import('./pages/Presence.jsx'))

const routes = [
    { path: '/', element: <Home /> },
    { path: '/messages', element: <Messages /> },
    { path: '/presence', element: <Presence /> }
]

export default routes