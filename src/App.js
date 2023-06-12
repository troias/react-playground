import logo from './logo.svg';
import './App.css';
import {createBrowserRouter, RouterProvider, createRoutesFromElements, Route, Link} from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Layout from './pages/layout';

// const router = createBrowserRouter([
//  {
//   path: '/',
//   element: <Home />

//  }, 
//   {
//     path: '/about',
//     element: <About />
//   },
// ]
// )

const routeDefinitions = createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="/about" element={<About />} />
  </Route>
);


const router = createBrowserRouter(routeDefinitions);




function App() {
  return <RouterProvider router={router} />;
}

export default App;
