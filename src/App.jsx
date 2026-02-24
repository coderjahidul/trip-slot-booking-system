import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import TourDetails from './pages/TourDetails';
import BookingSuccess from './pages/BookingSuccess';
import MyBookings from './pages/MyBookings';
import Login from './pages/Login';
import Register from './pages/Register';
import UserDashboard from './pages/UserDashboard';
import UserSettings from './pages/UserSettings';
import BookingDetails from './pages/BookingDetails';
import { useAuth } from './context/AuthContext';
import AppLayout from './layouts/AppLayout';
import UserLayout from './layouts/UserLayout';

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) return null; // Or a spinner

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<AppLayout><Login /></AppLayout>} />
        <Route path="/register" element={<AppLayout><Register /></AppLayout>} />
        <Route path="/tour/:id" element={<AppLayout><TourDetails /></AppLayout>} />
        <Route path="/booking-success" element={<AppLayout><BookingSuccess /></AppLayout>} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <UserDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user-settings"
          element={
            <ProtectedRoute>
              <UserSettings />
            </ProtectedRoute>
          }
        />
        <Route
          path="/my-bookings"
          element={
            <ProtectedRoute>
              <UserLayout>
                <MyBookings />
              </UserLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/my-bookings/:id"
          element={
            <ProtectedRoute>
              <UserLayout>
                <BookingDetails />
              </UserLayout>
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
