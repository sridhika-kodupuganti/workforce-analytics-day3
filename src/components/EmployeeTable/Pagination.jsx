import "./Pagination.css";

const Pagination = ({
  currentPage,
  totalPages,
  nextPage,
  previousPage,
  goToPage,
}) => {
  return (
    <div className="pagination">

      <button
        onClick={previousPage}
        disabled={currentPage === 1}
      >
        Previous
      </button>

      <div className="page-numbers">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => goToPage(index + 1)}
            className={currentPage === index + 1 ? "active-page" : ""}
          >
            {index + 1}
          </button>
        ))}
      </div>

      <button
        onClick={nextPage}
        disabled={currentPage === totalPages}
      >
        Next
      </button>

    </div>
  );
};

export default Pagination;