import { useState, useRef, useEffect, useCallback } from "react";

const useEmployeeSearch = (employees) => {
  // Search text state
  const [searchTerm, setSearchTerm] = useState("");

  // Search input reference
  const searchInputRef = useRef(null);

  // Auto-focus search input when component loads
  useEffect(() => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, []);

  // Update search text
  const handleSearch = useCallback((event) => {
    setSearchTerm(event.target.value);
  }, []);

  // Filter employees by Name or Employee ID
  const filteredEmployees = employees.filter((employee) => {
    const value = searchTerm.toLowerCase();

    return (
      employee.name.toLowerCase().includes(value) ||
      employee.id.toLowerCase().includes(value)
    );
  });

  return {
    searchTerm,
    setSearchTerm,
    handleSearch,
    filteredEmployees,
    searchInputRef,
  };
};

export default useEmployeeSearch;