import {
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
  } from "recharts";
  
  const EmployeePieChart = ({ employees }) => {
    const activeEmployees = employees.filter(
      (emp) => emp.status === "Active"
    ).length;
  
    const inactiveEmployees = employees.filter(
      (emp) => emp.status === "Inactive"
    ).length;
  
    const data = [
      {
        name: "Active",
        value: activeEmployees,
      },
      {
        name: "Inactive",
        value: inactiveEmployees,
      },
    ];
  
    const COLORS = ["#22c55e", "#ef4444"];
  
    return (
      <div className="chart-card">
        <h3>Employee Status</h3>
  
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={90}
              dataKey="value"
              label
            >
              {data.map((entry, index) => (
                <Cell
                  key={entry.name}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
  
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    );
  };
  
  export default EmployeePieChart;