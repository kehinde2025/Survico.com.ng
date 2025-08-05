// src/App.jsx

import { Routes, Route } from 'react-router-dom';

// Public
import Home from './Pages/Home';
import About from './Pages/About';
import Referral from './Pages/Referral';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import Opportunities from './Pages/Opportunities';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// User
import DashboardLayout from './components/DashboardLayou';
import DashboardHome from './Pages/dashboard/DashboardHome';
import Survey from './Pages/dashboard/Survey';
import Offers from './Pages/dashboard/Offers';
import More from './Pages/dashboard/More';
import Profile from './Pages/dashboard/Profile';
import Withdrawal from './Pages/dashboard/Withdrawal';
import Leaderboard from './Pages/dashboard/Leaderboard';
import Onboarding from './Pages/Onboarding/Onboarding';
import Referr from './Pages/dashboard/Referr';

// Admin
import AdminLayout from './Pages/admin/AdminLayout';
import AdminDashboardHome from './Pages/admin/DashboardHome';
import Users from './Pages/admin/Users';
import Withdrawals from './Pages/admin/Withdrawals';
import ReferralViews from './Pages/admin/ReferralViews';
import AdminLeaderboard from './Pages/admin/Leaderboard';
import Settings from './Pages/admin/Settings';
import Tasks from './Pages/admin/Tasks';
import AdminInspectors from './Pages/admin/AdminInspectors';
import AddInspector from './Pages/admin/AddInspectors';

// Inspector
import InspectorDashboard from './Pages/inspector/InspectorDashboard';
import InspectorChat from './Pages/inspector/InspectorChat';
import InspectorTasks from './Pages/inspector/InspectorTasks';
import InspectorProfile from './Pages/inspector/InspectorProfile';

// Auth
import ProtectedRoute from './components/ProtectedRoute';
import InspectorLayout from './Pages/inspector/InspectorLayout';
import AdminChat from './Pages/admin/Chat/AdminChat';
import SupportChat from './Pages/dashboard/SupportChat';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import TermsOfUse from './Pages/TermsOfUse';


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<><Navbar /><Home /><Footer /></>} />
      <Route path="/about" element={<><Navbar /><About /><Footer /></>} />
      <Route path="/opportunities" element={<><Navbar /><Opportunities /><Footer /></>} />
      <Route path="/referral" element={<><Navbar /><Referral /><Footer /></>} />
      <Route path="/signup" element={<><Navbar /><SignUp /><Footer /></>} />
      <Route path="/login" element={<><Navbar /><Login /><Footer /></>} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-of-use" element={<TermsOfUse />} />

      <Route path="/onboarding" element={<Onboarding />} />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute allowedRoles={['user']}>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<DashboardHome />} />
        <Route path="survey" element={<Survey />} />
        <Route path="offers" element={<Offers />} />
        <Route path="more" element={<More />} />
        <Route path="profile" element={<Profile />} />
        <Route path="withdrawal" element={<Withdrawal />} />
        <Route path="referral" element={<Referr />} />
        <Route path="leaderboard" element={<Leaderboard />} />
        <Route path="support" element={<SupportChat />} />
      </Route>

      <Route
        path="/admin"
        element={
          <ProtectedRoute allowedRoles={['admin']}>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<AdminDashboardHome />} />
        <Route path="dashboard" element={<AdminDashboardHome />} />
        <Route path="users" element={<Users />} />
        <Route path="withdrawals" element={<Withdrawals />} />
        <Route path="referrals" element={<ReferralViews />} />
        <Route path="leaderboard" element={<AdminLeaderboard />} />
        <Route path="tasks" element={<Tasks />} />
        <Route path="settings" element={<Settings />} />
        <Route path="chat" element={<AdminChat />} />
        <Route path="inspectors" element={<AdminInspectors />} />
        <Route path="inspectors/add" element={<AddInspector />} />
      </Route>

      <Route
        path="/inspector"
        element={
          <ProtectedRoute allowedRoles={['inspector']}>
            <InspectorLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<InspectorDashboard />} />
        <Route path="dashboard" element={<InspectorDashboard />} />
        <Route path="chat" element={<InspectorChat />} />
        <Route path="tasks" element={<InspectorTasks />} />
        <Route path="profile" element={<InspectorProfile />} />
      </Route>

    </Routes>
  );
}
