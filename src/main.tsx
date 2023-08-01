import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"
import Home from './routes/Home.tsx'
import ClientesPage from './routes/ClientesPage.tsx'
import DocsPage from './routes/DocsPage.tsx'
import ErrorPage from './routes/ErrorPage.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "clientes",
        element: <ClientesPage/>
      },
      {
        path: "docs",
        element: <DocsPage/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
