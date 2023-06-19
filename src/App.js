import logo from "./logo.svg";
import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
  Link,
} from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Layout from "./pages/layout";
import Error from "./pages/error";
import ProductDetail from "./pages/productDetail";
import Events from "./pages/events";
import { eventList } from "./components/fakeApi/eventList";

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
    <Route path="/product/:id" element={<ProductDetail />} />
    <Route
      path="/events"
      element={<Events />}
      loader={async () => {
        const data = await eventList();
        console.log("data", data);

        // data to json

        // Loader logic for the Events route
        // Perform any asynchronous operations here
        // For example, fetching data from an API
        // const response = await fetch("/api/events");
        // const data = await response.json();
        return data;
      }}
    />
    <Route path="*" element={<Error />} />
  </Route>
);

const router = createBrowserRouter(routeDefinitions);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
