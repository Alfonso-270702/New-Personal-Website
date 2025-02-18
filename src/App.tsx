import { useState } from "react";
import "./App.css";
import "swiper/css";

import Navbar from "./components/molecules/Navbar";
import Sidebar from "./components/molecules/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router";
import { Projects, AboutMe, Contact, Education, Experience } from "./pages";

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  return (
    <BrowserRouter>
      <div className="h-screen w-screen overflow-hidden flex flex-col border-2 border-white">
        <Navbar setSidebarOpen={setSidebarOpen} />
        <div className="flex h-screen">
          <Sidebar
            isSidebarOpen={isSidebarOpen}
            setSidebarOpen={setSidebarOpen}
          />
          <Routes>
            <Route
              path="/"
              element={<Projects isSidebarOpen={isSidebarOpen} />}
            />
            <Route path="/about/*" element={<AboutMe />}>
              <Route index path="experience" element={<Experience />} />
              <Route path="education" element={<Education />} />
            </Route>
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
