import "./Sidebar.css";
import {
  FaChartPie,
  FaUsers,
  FaTools,
  FaFileAlt,
} from "react-icons/fa";

const Sidebar = () => {
  const menus = [
    {
      id: 1,
      name: "Dashboard",
      icon: <FaChartPie />,
    },
    {
      id: 2,
      name: "Workforce",
      icon: <FaUsers />,
    },
    {
      id: 3,
      name: "Skills",
      icon: <FaTools />,
    },
    {
      id: 4,
      name: "Reports",
      icon: <FaFileAlt />,
    },
  ];

  return (
    <aside className="sidebar">
      <div className="logo">
        <h2>HR Analytics</h2>
      </div>

      <ul className="menu">
        {menus.map((menu) => (
          <li
            key={menu.id}
            className={menu.id === 1 ? "active" : ""}
          >
            <span className="icon">{menu.icon}</span>
            <span>{menu.name}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;