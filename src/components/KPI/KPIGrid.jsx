import KPICard from "./KPICard";
import "./KPIGrid.css";

import {
  FaUsers,
  FaUserCheck,
  FaUserTimes,
  FaChartLine,
  FaBriefcase,
  FaTools,
} from "react-icons/fa";

const KPIGrid = ({ kpis }) => {
  const cards = [
    {
      title: "Total Employees",
      value: kpis.totalEmployees,
      icon: <FaUsers />,
      color: "#2563eb",
    },
    {
      title: "Active Employees",
      value: kpis.activeEmployees,
      icon: <FaUserCheck />,
      color: "#16a34a",
    },
    {
      title: "Inactive Employees",
      value: kpis.inactiveEmployees,
      icon: <FaUserTimes />,
      color: "#dc2626",
    },
    {
      title: "Attrition Rate",
      value: `${kpis.attritionRate}%`,
      icon: <FaChartLine />,
      color: "#f97316",
    },
    {
      title: "Hiring Rate",
      value: `${kpis.hiringRate}%`,
      icon: <FaBriefcase />,
      color: "#9333ea",
    },
    {
      title: "Skill Coverage",
      value: kpis.skillCoverage,
      icon: <FaTools />,
      color: "#0891b2",
    },
  ];

  return (
    <div className="kpi-grid">
      {cards.map((card) => (
        <KPICard
          key={card.title}
          title={card.title}
          value={card.value}
          icon={card.icon}
          color={card.color}
        />
      ))}
    </div>
  );
};

export default KPIGrid;