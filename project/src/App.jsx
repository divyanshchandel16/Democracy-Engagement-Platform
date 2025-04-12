import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Building2, FileText, Users, MapPin, Vote, Bell } from "lucide-react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Legislation from "./pages/Legislation";
import Representatives from "./pages/Representatives";
import Initiatives from "./pages/Initiatives";
import Notifications from "./pages/Notifications";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

const navigation = [
  { name: "Dashboard", href: "/", icon: Building2 },
  { name: "Legislation", href: "/legislation", icon: FileText },
  { name: "Representatives", href: "/representatives", icon: Users },
  { name: "Local Initiatives", href: "/initiatives", icon: MapPin },
  { name: "Community Voting", href: "/voting", icon: Vote },
  { name: "Notifications", href: "/notifications", icon: Bell },
];

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

function App() {
  const location = useLocation();
  const hideSidebar = ["/login", "/signup"].includes(location.pathname);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar /> 
      <div className="flex">
        {!hideSidebar && <Sidebar navigation={navigation} />}{" "}
        <main className="flex-1 p-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/legislation" element={<Legislation />} />
            <Route path="/representatives" element={<Representatives />} />
            <Route path="/initiatives" element={<Initiatives />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default AppWrapper;
