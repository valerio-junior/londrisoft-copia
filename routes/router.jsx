import { createBrowserRouter } from 'react-router-dom';
import Home from '../src/pages/Home/index'
import Info from '../src/pages/Info/index'

const routes = createBrowserRouter ([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/details",
        element: <Info />,
    }
])

export default routes;