import logo from "./logo.svg";
import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
  json,
  Link,
} from "react-router-dom";
import { Suspense } from "react";
import Home from "./pages/home";
import About from "./pages/about";
import Layout from "./pages/layout";
import Error from "./pages/error";
import ProductDetail from "./pages/productDetail";
import Events from "./pages/events";
import { eventList } from "./components/fakeApi/eventList";
import EventDetail from "./pages/eventDetail";
import EditItem from "./components/editItem";

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
      element={
        <Suspense fallback={<Error />}>
          <Events />
        </Suspense>
      }
      loader={async () => {
        try {
          const data = await eventList();
          console.log("data", data);

          if (!data) {
            throw json({ message: "Error" }, { status: 500 });
          }

          return json(data, { status: 200 });
        } catch (error) {
          throw error;
        }
      }}
    />
    <Route
      path="/events/:id"
      element={<EventDetail />}
      loader={async ({ params }) => {
        try {
          const data = await eventList();

          if (!data) {
            throw json({ message: "Error" }, { status: 500 });
          }

          const event = data.find((event) => event.id === parseInt(params.id));

          if (!event) {
            throw json({ message: "Event not found" }, { status: 404 });
          }

          console.log("EventDetail data", event);
          return json(event, { status: 200 });
        } catch (error) {
          throw error;
        }
      }}
    />
    <Route
      path="/events/edit/:id"
      id="edit"
      element={<EditItem />}
      loader={async ({ params }) => {
        try {
          const data = await eventList();

          if (!data) {
            throw json({ message: "Error" }, { status: 500 });
          }

          const event = data.find((event) => event.id === parseInt(params.id));

          if (!event) {
            throw json({ message: "Event not found" }, { status: 404 });
          }

          console.log("EventDetail data", event);
          return json(event, { status: 200 });
        } catch (error) {
          throw error;
        }
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
