import React , {lazy , Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import Header from "./components/Header.js";
import Body from "./components/Body.js";
// import About from './components/About.js';
import Contact from './components/Contact.js';
import Error from './components/Error.js';
import RestaurantMenu from "./components/ResaturantMenu.js";  // Corrected import
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";


const About = lazy(() => import("./components/About"));
const Grocery = lazy(() => import("./components/Grocery"));



const AppLayout = () => {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <Suspense fallback = {<h1>Loading ...</h1>}><About/></Suspense>
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,  // Corrected component name
      },
      {
         path: "/grocery",
         element: <Suspense fallback = {<h1>Loading ...</h1>}><Grocery /></Suspense>
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

// Removed duplicate component declaration

