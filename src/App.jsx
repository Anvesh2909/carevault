import { Routes, Route } from "react-router-dom";
import Home from "./sections/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import TopDoctors from "./sections/TopDoctors.jsx";
import Login from "./sections/Login.jsx";
import Signup from "./sections/Signup.jsx";
import MyProfile from "./sections/MyProfile.jsx";
import Appointment from "./sections/Appointment.jsx";
import MyAppointments from "./sections/MyAppointments.jsx";
import About from "./sections/About.jsx";
import SpecialityMenu from "./components/SpecialityMenu.jsx";
import Doctors from "./sections/Doctors.jsx";
const App = () => {
    return (
        <div className="mx-4 sm:mx-[10%]">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/doctors" element={<Doctors/>}/>
                <Route path="/doctors/:id" element={<Doctors/>}/>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/myprofile" element={<MyProfile />} />
                <Route path="/appointment" element={<Appointment />} />
                <Route path="/myappointments" element={<MyAppointments />} />
                <Route path="/myappointments/:id" element={<MyAppointments />} />
                <Route path="/about" element={<About/>} />
                <Route path="/special" element={<SpecialityMenu/>}/>
            </Routes>
            <Footer />
        </div>
    );
};
export default App;