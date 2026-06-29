import "./Header.css";
import { FaSyncAlt, FaUndoAlt, FaUserCircle } from "react-icons/fa";

const Header = ({ onRefresh, onReset }) => {
  return (
    <header className="header">
      <div className="header-left">
        <h1>Workforce Analytics Dashboard</h1>
        <p>Monitor workforce performance and employee analytics</p>
      </div>

      <div className="header-right">
        <button className="refresh-btn" onClick={onRefresh}>
          <FaSyncAlt />
          Refresh
        </button>

        <button className="reset-btn" onClick={onReset}>
          <FaUndoAlt />
          Reset Filters
        </button>

        <div className="profile">
          <FaUserCircle className="profile-icon" />
          <div>
            <h4>Admin</h4>
            <p>HR Manager</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;