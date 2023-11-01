import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainApp from './09-useContext/MainApp';
import ErrorPage from './09-useContext/ErrorPage';
import HomePage from './09-useContext/HomePage';
import LoginPage from './09-useContext/LoginPage';
import AboutPage from './09-useContext/AboutPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainApp />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: 'login',
        element: <LoginPage />
      },
      {
        path: 'about',
        element: <AboutPage />
      },
      {
        path: '/*',
        element: <Navigate to='/' />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
