import { Routes, Route, Navigate } from "react-router-dom";
import { SignedIn, SignedOut, useAuth } from "@clerk/clerk-react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ResumeBuilder from "./pages/ResumeBuilder";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

// Protected route wrapper
function ProtectedRoute({ children }) {
  const { isSignedIn } = useAuth();

  if (!isSignedIn) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default function App() {
  return (
    <>
      <Routes>
        {/* Public Route */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
              <Footer />
            </>
          }
        />

        {/* Login Route */}
        <Route
          path="/login"
          element={
            <>
              <SignedIn>
                {/* If logged in, redirect to home */}
                <Navigate to="/resume-builder" replace />
              </SignedIn>
              <SignedOut>
                {/* If signed out, show login page */}
                <Login />
              </SignedOut>
            </>
          }
        />
        <Route
          path="/sign-up"
          element={
            <>
              <SignedIn>
                {/* If logged in, redirect to home */}
                <Navigate to="/" replace />
              </SignedIn>
              <SignedOut>
                {/* If signed out, show login page */}
                <SignUp />
              </SignedOut>
            </>} />
        {/* Protected Route */}
        <Route
          path="/resume-builder"
          element={
            <ProtectedRoute>
              <div className="min-h-screen pb-20">
                <Header />
                <ResumeBuilder />
                <Footer />
              </div>
            </ProtectedRoute>
          }
        />

      </Routes >
    </>
  );
}
