import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./layouts/DeafultLayout"
import HomePage from "./pages/HomePage"


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}