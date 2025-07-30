import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Auth } from "@/layouts";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/home/Home";
import ReviewPage from "./pages/review/ReviewPage";
import Login from "./pages/auth/login/Login";
import Profile from "./pages/profile/Profile";
import VibeForm from "./pages/vibe/VibeForm";

function App() {
  return (
    <MainLayout>
      <Routes>
        {/* <Route path="/dashboard/*" element={<Dashboard />} /> */}
        <Route path="/home" element={<Home />} />
        <Route path="/review" element={<ReviewPage />} />
        <Route path="/auth/*" element={<Auth />} />
        <Route path="/login/*" element={<Login />} />
        <Route path="/profile/*" element={<Profile />} />
        <Route path="/create-vibe/*" element={<VibeForm />} />
        <Route path="*" element={<Navigate to="/dashboard/home" replace />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
