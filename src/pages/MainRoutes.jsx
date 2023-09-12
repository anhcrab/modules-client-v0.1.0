import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Admin from "../layouts/Admin"
import General from "../layouts/General"

const router = createBrowserRouter([
  {
    path: '/admin',
    element: <Admin />
  },
  {
    path: '/',
    element: <General />
  },
])

const MainRoutes = () => {
  return(
    <RouterProvider router={router} />
  )
}

export default MainRoutes