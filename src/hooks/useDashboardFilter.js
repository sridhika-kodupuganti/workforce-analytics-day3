import { useState, useMemo } from "react";

const useDashboardFilter = (employees) => {
  const [department, setDepartment] = useState("All");
  const [location, setLocation] = useState("All");
  const [status, setStatus] = useState("All");

  // Filter employees using useMemo
  const filteredEmployees = useMemo(() => {
    return employees.filter((employee) => {
      const departmentMatch =
        department === "All" || employee.department === department;

      const locationMatch =
        location === "All" || employee.location === location;

      const statusMatch =
        status === "All" || employee.status === status;

      return departmentMatch && locationMatch && statusMatch;
    });
  }, [employees, department, location, status]);

  // Dropdown options
  const departments = useMemo(() => {
    return ["All", ...new Set(employees.map((emp) => emp.department))];
  }, [employees]);

  const locations = useMemo(() => {
    return ["All", ...new Set(employees.map((emp) => emp.location))];
  }, [employees]);

  const statuses = ["All", "Active", "Inactive"];

  return {
    department,
    location,
    status,

    setDepartment,
    setLocation,
    setStatus,

    departments,
    locations,
    statuses,

    filteredEmployees,
  };
};

export default useDashboardFilter;