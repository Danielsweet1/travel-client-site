
import { createBrowserRouter } from 'react-router-dom';
import Home from '../../components/Home/Home';
import Main from '../../layout/Main';


   export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [{
            path: '/home',
            loader: ()=> fetch('https://travel-site-server.vercel.app/places'),
            element: <Home></Home>
        }]
    }
   ])
   
