import {
    ResponsiveContainer,
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
  } from "recharts";
  
  const EmployeeAreaChart = ({ employees }) => {
    const data = [
      {
        name: "0-2 Years",
        employees: employees.filter(
          (emp) => emp.experience <= 2
        ).length,
      },
      {
        name: "3-5 Years",
        employees: employees.filter(
          (emp) => emp.experience >= 3 && emp.experience <= 5
        ).length,
      },
      {
        name: "6-8 Years",
        employees: employees.filter(
          (emp) => emp.experience >= 6 && emp.experience <= 8
        ).length,
      },
      {
        name: "9+ Years",
        employees: employees.filter(
          (emp) => emp.experience >= 9
        ).length,
      },
    ];
  
    return (
      <div className="chart-card">
        <h3>Experience Distribution</h3>
  
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
  
            <XAxis dataKey="name" />
  
            <YAxis />
  
            <Tooltip />
  
            <Area
              type="monotone"
              dataKey="employees"
              stroke="#2563eb"
              fill="#93c5fd"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  };
  
  export default EmployeeAreaChart;