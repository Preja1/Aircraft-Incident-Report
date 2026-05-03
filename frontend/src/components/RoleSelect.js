import React from "react";
import { FaUsers, FaUserCog } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./RoleSelect.css";

function RoleSelect() {
  const navigate = useNavigate();

  return (
    
      <div className="role-content">
        <h1 className="system-title">Aircraft Incident Reporting Sytem</h1>
        <h3 className="role-titile">Role select</h3><br></br>

        <div className="role-cards">
          {/*User Login */}

          <div className="role-card" onClick={() => navigate("/user-login")}>
            <FaUsers className="role-icon" />
            <p>User Login</p>
          </div>

          {/*Admin Login */}
          <div className="role-card" onClick={() => navigate("/admin-login")}>
            <FaUserCog className="role-icon" />
            <p>Admin Login</p>
          </div>
        </div>
      </div>
    
  );
}
export default RoleSelect;