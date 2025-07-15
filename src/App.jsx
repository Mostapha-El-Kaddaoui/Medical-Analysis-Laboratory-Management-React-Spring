import './style/support.css'
import LandingPage from './pages/Client/LandingPage'
import RendezvousPage from './pages/Client/RendezvousPage'
import AnalysesPage from './pages/Client/AnalysesPage'
import DashboardPage from './pages/Admin/DashboardPage'
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/rendezvous" element={<RendezvousPage />} />
      <Route path="/analyses" element={<AnalysesPage />} />
      <Route path="/admin/dashboard" element={<DashboardPage />} />
    </Routes>
  )
}

export default App
