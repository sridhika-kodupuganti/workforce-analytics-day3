import { useMemo } from "react";

const useKPICalculator = (employees) => {
  const kpis = useMemo(() => {
    const totalEmployees = employees.length;

    const activeEmployees = employees.filter(
      (employee) => employee.status === "Active"
    ).length;

    const inactiveEmployees = employees.filter(
      (employee) => employee.status === "Inactive"
    ).length;

    const attritionRate =
      totalEmployees === 0
        ? 0
        : ((inactiveEmployees / totalEmployees) * 100).toFixed(1);

    const hiredEmployees = employees.filter(
      (employee) => employee.hired
    ).length;

    const hiringRate =
      totalEmployees === 0
        ? 0
        : ((hiredEmployees / totalEmployees) * 100).toFixed(1);

    const totalSkills = employees.reduce(
      (count, employee) => count + employee.skills.length,
      0
    );

    const skillCoverage =
      totalEmployees === 0
        ? 0
        : (totalSkills / totalEmployees).toFixed(1);

    return {
      totalEmployees,
      activeEmployees,
      inactiveEmployees,
      attritionRate,
      hiringRate,
      skillCoverage,
    };
  }, [employees]);

  return kpis;
};

export default useKPICalculator;