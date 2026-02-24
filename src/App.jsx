import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import TourDetails from './pages/TourDetails';
import BookingSuccess from './pages/BookingSuccess';
import MyBookings from './pages/MyBookings';
import Login from './pages/Login';
import Register from './pages/Register';
import { useAuth } from './context/AuthContext';
import AppLayout from './layouts/AppLayout';

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
          path="/my-bookings"
          element={
            <ProtectedRoute>
              <AppLayout>
                <MyBookings />
              </AppLayout>
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
