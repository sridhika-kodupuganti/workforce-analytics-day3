import { useState, useMemo } from "react";

const usePagination = (data, itemsPerPage = 5) => {
  // Current page state
  const [currentPage, setCurrentPage] = useState(1);

  // Total pages
  const totalPages = useMemo(() => {
    return Math.ceil(data.length / itemsPerPage);
  }, [data, itemsPerPage]);

  // Current page data
  const currentData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return data.slice(startIndex, startIndex + itemsPerPage);
  }, [data, currentPage, itemsPerPage]);

  // Next page
  const nextPage = () => {
    setCurrentPage((prev) =>
      prev < totalPages ? prev + 1 : prev
    );
  };

  // Previous page
  const previousPage = () => {
    setCurrentPage((prev) =>
      prev > 1 ? prev - 1 : prev
    );
  };

  // Go to specific page
  const goToPage = (page) => {
    setCurrentPage(page);
  };

  return {
    currentPage,
    totalPages,
    currentData,
    nextPage,
    previousPage,
    goToPage,
    setCurrentPage,
  };
};

export default usePagination;