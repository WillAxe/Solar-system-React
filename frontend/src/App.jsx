import "./navbar.css"
import "./App.css"
import Home from "./components/home"
import Planets from "./components/planets"
import Moons from "./components/moons"
import CelestialObjects from "./components/celestialObjects"
import Planet from "./components/planet"
import Moon from "./components/moon"

import {
  createHashRouter,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom"

function App() {
  const router = createHashRouter([
    {
      children: [
        { element: <Home />, path: "/" },
        { element: <Planets />, path: "/planets" },
        { element: <Moons />, path: "/moons" },
        { element: <CelestialObjects />, path: "/celestialobjects" },
        { element: <Planet />, path: "/planets/:planetname" },
        { element: <Moon />, path: "/moons/:moonname" },
      ],
      element: (
        <>
          {/* <header className="header">Solar System</header> */}
          <nav className="nav-bar">
            <ul className="navbar-list">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/planets">The Planets</Link>
              </li>
              <li>
                <Link to="/moons">Moons</Link>
              </li>
              <li>
                <Link to="/celestialobjects">Other celestial objects</Link>
              </li>
            </ul>
          </nav>
          <main>
            <Outlet />
          </main>
        </>
      ),
    },
  ])
  return <RouterProvider router={router} />
}

export default App
