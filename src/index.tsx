import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from "./App"
import "./index.css"
import { Favourites } from "./pages/Favourites"
import { Home } from "./pages/Home"
import { NotFound } from "./pages/NotFound"
import { Painting } from "./pages/Painting"
import reportWebVitals from "./reportWebVitals"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/favourites",
        element: <Favourites />
      },
      {
        path: "/painting/:paintingId",
        element: <Painting />
      }
    ]
  }
])
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
