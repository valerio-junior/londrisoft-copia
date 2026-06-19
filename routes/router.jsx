import { createBrowserRouter } from 'react-router-dom';

const routes = createBrowserRouter ([
    {
        path: "/",
        element: "<Home />",
    },
    {
        path: "/details",
    element: "<Info />",
    }
])