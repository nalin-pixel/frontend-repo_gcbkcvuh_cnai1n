import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Test from './Test'
import Login from './pages/Buyer/Login'
import BuyerDashboard from './pages/Buyer/Dashboard'
import AvailabilityWidget from './pages/Availability/Widget'
import TenantDashboard from './pages/TenantBoard/Dashboard'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/test" element={<Test />} />
        <Route path="/buyer/login" element={<Login />} />
        <Route path="/buyer/dashboard" element={<BuyerDashboard />} />
        <Route path="/availability" element={<AvailabilityWidget />} />
        <Route path="/tenantboard" element={<TenantDashboard />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
