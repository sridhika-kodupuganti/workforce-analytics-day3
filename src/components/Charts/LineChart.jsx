import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
  } from "recharts";
  
  const EmployeeLineChart = ({ employees }) => {
    const data = [
      {
        name: "IT",
        employees: employees.filter(
          (emp) => emp.department === "IT"
        ).length,
      },
      {
        name: "HR",
        employees: employees.filter(
          (emp) => emp.department === "HR"
        ).length,
      },
      {
        name: "Sales",
        employees: employees.filter(
          (emp) => emp.department === "Sales"
        ).length,
      },
      {
        name: "Finance",
        employees: employees.filter(
          (emp) => emp.department === "Finance"
        ).length,
      },
      {
        name: "Support",
        employees: employees.filter(
          (emp) => emp.department === "Support"
        ).length,
      },
    ];
  
    return (
      <div className="chart-card">
        <h3>Employees by Department</h3>
  
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
  
            <XAxis dataKey="name" />
  
            <YAxis />
  
            <Tooltip />
  
            <Line
              type="monotone"
              dataKey="employees"
              stroke="#2563eb"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  };
  
  export default EmployeeLineChart;