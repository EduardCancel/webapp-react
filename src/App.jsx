import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./layouts/DeafultLayout"
import HomePage from "./pages/HomePage"
import SingleMovie from "./pages/SingleMovie"


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
          <Route path="/" Component={HomePage} />
          < Route path="/movies/:id" Component={SingleMovie} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}