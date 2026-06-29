import {
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
  } from "recharts";
  
  const EmployeeDonutChart = ({ employees }) => {
    const departments = [...new Set(employees.map((e) => e.department))];
  
    const data = departments.map((department) => ({
      name: department,
      value: employees.filter(
        (emp) => emp.department === department
      ).length,
    }));
  
    const COLORS = [
      "#2563eb",
      "#16a34a",
      "#f97316",
      "#9333ea",
      "#0891b2",
    ];
  
    return (
      <div className="chart-card">
        <h3>Department Distribution</h3>
  
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              innerRadius={60}
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
  
  export default EmployeeDonutChart;