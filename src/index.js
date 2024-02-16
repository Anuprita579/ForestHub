import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Aos from 'aos';
import "aos/dist/aos.css"
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import WhySaveForest from './Components/WhySaveForest';
import Error from './Components/Error';
import Home from './Components/Home';
import Maps from './Components/Maps';
import AboutUs from './Components/AboutUs';
import GoogleLens from './Components/GoogleLens';
import Login from './Components/Login';
import Registration from './Components/Registration';
import EmailSender from './Components/EmailSender';
import Blogs from './Components/Blogs'
import Addblog from './Components/Addblog'
import Readblog from './Components/Readblog'
import ForestEvent from './Components/ForestEvent';
import PlantopiaHome from './Components/PlantopiaHome';
import App2 from './Components/App2';
import FeedbackForm from './Components/FeedbackForm';


Aos.init();

const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/feature/why-preserve",
        element: <WhySaveForest />
      },
      {
        path: "/maps",
        element: <Maps />
      },
      {
        path: "/feature/tourism",
        element: <ForestEvent />
      },
      {
        path: "/about",
        element: <AboutUs />
      },
      {
        path: "/feature/image-analyzer",
        element: <GoogleLens />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/registration",
        element: <Registration />
      },
      {
        path: "/send-email",
        element: <EmailSender />
      },
      {
        path: "/blogs",
        element: <Blogs />
      },
      {
        path: "/addblog",
        element: <Addblog />
      },
      {
        path: "/readblog/:id",
        element: <Readblog />
      },
      {
        path: "/feedback",
        element: <FeedbackForm />
      }
    ]
  },
  {
    path: "/feature/plantopia",
    element: <App2 />,
    errorElement: <Error />,
    children: [
      {
        path: "/feature/plantopia",
        element: <PlantopiaHome />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
