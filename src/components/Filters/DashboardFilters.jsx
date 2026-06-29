import "./DashboardFilters.css";

const DashboardFilters = ({
  department,
  location,
  status,
  departments,
  locations,
  statuses,
  setDepartment,
  setLocation,
  setStatus,
}) => {
  return (
    <div className="dashboard-filters">

      <select
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
      >
        {departments.map((dept) => (
          <option key={dept} value={dept}>
            {dept}
          </option>
        ))}
      </select>

      <select
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      >
        {locations.map((loc) => (
          <option key={loc} value={loc}>
            {loc}
          </option>
        ))}
      </select>

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        {statuses.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>

    </div>
  );
};

export default DashboardFilters;