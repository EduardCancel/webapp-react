import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./layouts/DeafultLayout"
import HomePage from "./pages/HomePage"
import SingleMovie from "./pages/SingleMovie"
import NotFound from "./pages/NotFound"
import Register from "./pages/auth/register"
import Login from "./pages/auth/login"



export default function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
          <Route path="/" Component={HomePage} />
          < Route path="/movies/:id" Component={SingleMovie} />
          <Route path="/*" Component={NotFound} />

          {/* auth routes */}
          < Route path="/register" Component={Register} />
          < Route path="/login" Component={Login} />

        </Route>
      </Routes>
    </BrowserRouter>

  )
}