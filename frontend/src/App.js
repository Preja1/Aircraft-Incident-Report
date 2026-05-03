import { BrowserRouter, Routes, Route } from "react-router-dom";
import RoleSelect from "./components/RoleSelect";
import LoginPage from "./components/Login";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        {/* Role Selection Page */}
        <Route path="/" element={<RoleSelect />} />

        {/* User Login Page */}
        <Route path="/user-login" element={<LoginPage role="User" />} />

        {/* Admin Login Page */}
        <Route path="/admin-login" element={<LoginPage role="Admin" />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;