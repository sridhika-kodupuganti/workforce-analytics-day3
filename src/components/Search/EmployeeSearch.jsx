import "./EmployeeSearch.css";
import { FaSearch } from "react-icons/fa";

const EmployeeSearch = ({
  searchTerm,
  handleSearch,
  searchInputRef,
}) => {
  return (
    <div className="employee-search">
      <FaSearch className="search-icon" />

      <input
        ref={searchInputRef}
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search by Employee Name or ID..."
      />
    </div>
  );
};

export default EmployeeSearch;