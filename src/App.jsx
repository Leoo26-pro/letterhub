import Navbar from "./components/Navbar";
import Sidebar from "./components/SideBar";
import HomePage from "./pages/Homepage";
import AjukanSurat from "./pages/AjukanSurat";
import Footer from "./components/Footer";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div>
            {/* Navbar */}
            <Navbar setSidebarOpen={setSidebarOpen} />

            {/* Sidebar */}
            <Sidebar
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
            />

            {/* Main Content */}
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/ajukan-surat" element={<AjukanSurat />} />
                {/* Tambahkan route lain di sini */}
            </Routes>

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default App;
