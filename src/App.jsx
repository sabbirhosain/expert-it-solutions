import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css'
import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import ApplicationFrom from "./Pages/ApplicationFrom"
import Courses from "./Pages/Courses";
import CoursesDetails from "./Pages/CoursesDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/our-courses" element={<Courses />} />
        <Route path="/our-course-details" element={<CoursesDetails />} />
        <Route path="/application-from" element={<ApplicationFrom />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
