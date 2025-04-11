import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Building2, FileText, Users, MapPin, Vote, Bell } from 'lucide-react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Legislation from './pages/Legislation';
import Representatives from './pages/Representatives';
import Initiatives from './pages/Initiatives';
import Notifications from './pages/Notifications';

const navigation = [
  { name: 'Dashboard', href: '/', icon: Building2 },
  { name: 'Legislation', href: '/legislation', icon: FileText },
  { name: 'Representatives', href: '/representatives', icon: Users },
  { name: 'Local Initiatives', href: '/initiatives', icon: MapPin },
  { name: 'Community Voting', href: '/voting', icon: Vote },
  { name: 'Notifications', href: '/notifications', icon: Bell },
];

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="flex">
          <Sidebar navigation={navigation} />
          <main className="flex-1 p-8">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/legislation" element={<Legislation />} />
              <Route path="/representatives" element={<Representatives />} />
              <Route path="/initiatives" element={<Initiatives />} />
              <Route path="/notifications" element={<Notifications />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;