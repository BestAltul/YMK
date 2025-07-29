import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Auth } from "@/layouts";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/home/Home";
import ReviewPage from "./pages/review/ReviewPage";

function App() {
  return (
    <MainLayout>
    <Routes>
      {/* <Route path="/dashboard/*" element={<Dashboard />} /> */}
      <Route path="/home" element={<Home />} />
      <Route path="/review" element={<ReviewPage />} />
      <Route path="/auth/*" element={<Auth />} />
      <Route path="*" element={<Navigate to="/dashboard/home" replace />} />
    </Routes>
    </MainLayout>
  );
}

export default App;
