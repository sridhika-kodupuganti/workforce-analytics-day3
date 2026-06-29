import "./KPICard.css";

const KPICard = ({ title, value, icon, color }) => {
  return (
    <div className="kpi-card">
      <div
        className="kpi-icon"
        style={{ backgroundColor: color }}
      >
        {icon}
      </div>

      <div className="kpi-details">
        <h4>{title}</h4>
        <h2>{value}</h2>
      </div>
    </div>
  );
};

export default KPICard;