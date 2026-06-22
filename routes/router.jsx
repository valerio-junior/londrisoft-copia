import { createBrowserRouter } from 'react-router-dom';
import Home from '../src/pages/Home/index'
import Info from '../src/pages/Info/index'
import Pesquisar from '../src/pages/Pesquisa/index'

const routes = createBrowserRouter ([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/details",
        element: <Info />,
    },
    {
        path: "/geral",
        element: <Pesquisar />
    }
])

export default routes;