import { useMemo } from "react";

import DashboardLayout from "../components/Layout/DashboardLayout";
import EmployeeSearch from "../components/Search/EmployeeSearch";
import DashboardFilters from "../components/Filters/DashboardFilters";
import KPIGrid from "../components/KPI/KPIGrid";
import EmployeeTable from "../components/EmployeeTable/EmployeeTable";
import Pagination from "../components/EmployeeTable/Pagination";

import EmployeeLineChart from "../components/Charts/LineChart";
import EmployeePieChart from "../components/Charts/PieChart";
import EmployeeAreaChart from "../components/Charts/AreaChart";
import EmployeeDonutChart from "../components/Charts/DonutChart";

import "../components/Charts/Charts.css";

import employees from "../data/employees";

import useEmployeeSearch from "../hooks/useEmployeeSearch";
import useDashboardFilter from "../hooks/useDashboardFilter";
import useKPICalculator from "../hooks/useKPICalculator";
import usePagination from "../hooks/usePagination";
import useDashboardActions from "../hooks/useDashboardActions";

const Dashboard = () => {
  // Employee Search
  const {
    searchTerm,
    setSearchTerm,
    handleSearch,
    searchInputRef,
  } = useEmployeeSearch(employees);

  // Dashboard Filters
  const {
    department,
    location,
    status,
    departments,
    locations,
    statuses,
    setDepartment,
    setLocation,
    setStatus,
  } = useDashboardFilter(employees);

  // Search + Filter together
  const filteredEmployees = useMemo(() => {
    return employees.filter((employee) => {
      const matchesSearch =
        employee.name
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        employee.id
          .toLowerCase()
          .includes(searchTerm.toLowerCase());

      const matchesDepartment =
        department === "All" ||
        employee.department === department;

      const matchesLocation =
        location === "All" ||
        employee.location === location;

      const matchesStatus =
        status === "All" ||
        employee.status === status;

      return (
        matchesSearch &&
        matchesDepartment &&
        matchesLocation &&
        matchesStatus
      );
    });
  }, [
    searchTerm,
    department,
    location,
    status,
  ]);

  // KPI
  const kpis = useKPICalculator(filteredEmployees);

  // Pagination
  const {
    currentPage,
    totalPages,
    currentData,
    nextPage,
    previousPage,
    goToPage,
    setCurrentPage,
  } = usePagination(filteredEmployees, 5);

  // Dashboard Actions
  const {
    refreshDashboard,
    resetFilters,
  } = useDashboardActions({
    setSearchTerm,
    setDepartment,
    setLocation,
    setStatus,
    setCurrentPage,
  });

  return (
    <DashboardLayout
      onRefresh={refreshDashboard}
      onReset={resetFilters}
    >
      {/* Search */}
      <EmployeeSearch
        searchTerm={searchTerm}
        handleSearch={handleSearch}
        searchInputRef={searchInputRef}
      />

      {/* Filters */}
      <DashboardFilters
        department={department}
        location={location}
        status={status}
        departments={departments}
        locations={locations}
        statuses={statuses}
        setDepartment={setDepartment}
        setLocation={setLocation}
        setStatus={setStatus}
      />

      {/* KPI Cards */}
      <KPIGrid kpis={kpis} />

      {/* Charts */}
      <div className="chart-grid">
        <EmployeeLineChart
          employees={filteredEmployees}
        />

        <EmployeePieChart
          employees={filteredEmployees}
        />

        <EmployeeAreaChart
          employees={filteredEmployees}
        />

        <EmployeeDonutChart
          employees={filteredEmployees}
        />
      </div>

      {/* Employee Table */}
      <EmployeeTable
        employees={currentData}
      />

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        nextPage={nextPage}
        previousPage={previousPage}
        goToPage={goToPage}
      />
    </DashboardLayout>
  );
};

export default Dashboard;