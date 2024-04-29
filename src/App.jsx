import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/login/Login";
import Home from "./components/home/home/Home";
import Dashboard from "./components/home/dashboard/Dashboard";
import Users from "./components/home/users/Users";
import NewUser from "./components/home/newUser/NewUser";
import Map from "./components/home/map/Map";
import Profile from "./components/home/profile/Profile";
import { useSelector } from "react-redux";

function App() {
  let loginUser = useSelector((state) => state.info.isLogin);
  const ProtectedRoute = ({ children }) => {
    if (!loginUser) {
      return <Navigate to="/" replace />;
    }
    return children;
  };
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route index path="users" element={<Users />} />
          <Route index path="map" element={<Map />} />
          <Route index path="newuser" element={<NewUser />} />
          <Route index path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
