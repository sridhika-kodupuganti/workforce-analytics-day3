import { useCallback } from "react";

const useDashboardActions = ({
  setSearchTerm,
  setDepartment,
  setLocation,
  setStatus,
  setCurrentPage,
}) => {
  // Refresh Dashboard
  const refreshDashboard = useCallback(() => {
    window.location.reload();
  }, []);

  // Reset Filters
  const resetFilters = useCallback(() => {
    setSearchTerm("");
    setDepartment("All");
    setLocation("All");
    setStatus("All");
    setCurrentPage(1);
  }, [
    setSearchTerm,
    setDepartment,
    setLocation,
    setStatus,
    setCurrentPage,
  ]);

  // Search Employee
  const searchEmployee = useCallback(
    (value) => {
      setSearchTerm(value);
      setCurrentPage(1);
    },
    [setSearchTerm, setCurrentPage]
  );

  return {
    refreshDashboard,
    resetFilters,
    searchEmployee,
  };
};

export default useDashboardActions;