import React from 'react'
import { useRoutes } from 'react-router-dom'

import Home from './pages/home'

const Routes = () => {
    return useRoutes([
    {
        path: '/',
        children: [
            {
                path: '',
                element: <Home />
            },
            {
                path: '*',
                element: <h1>404 Not Found</h1>
            }
        ]
    },
    ])
}

export default Routes