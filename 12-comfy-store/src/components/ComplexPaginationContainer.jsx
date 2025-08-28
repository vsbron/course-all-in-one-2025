import { useLoaderData, useLocation, useNavigate } from "react-router-dom";

function ComplexPaginationContainer() {
  // Get the meta data from loader hook and get the page info
  const { meta } = useLoaderData();
  const { pageCount, page } = meta.pagination;

  // Get the query params, pathname and navigate object
  const { search, pathname } = useLocation();
  const navigate = useNavigate();

  // Page change handler function
  const handlePageChange = (pageNumber) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set("page", pageNumber);
    navigate(`${pathname}?${searchParams.toString()}`);
  };

  // Helper function for adding a pagination button
  const addPageButton = ({ pageNum, activeClass }) => (
    <button
      key={pageNum}
      className={`btn btn-xs sm:btn-md join-item bg-base-200 hover:bg-base-300 border-none ${
        activeClass ? "bg-base-300 border-base-300" : ""
      }`}
      onClick={() => handlePageChange(pageNum)}
    >
      {pageNum}
    </button>
  );

  // Helper function that renders page buttons
  const renderPageButton = () => {
    const pageButtons = [];
    // First page
    pageButtons.push(addPageButton({ pageNum: 1, activeClass: page === 1 }));
    page > 2 &&
      pageButtons.push(
        <button
          className="join-item btn btn-xs sm:btn-md bg-base-200 border-none"
          ley="dots-1"
        >
          ...
        </button>
      );
    // Active page
    page !== 1 &&
      page !== pageCount &&
      pageButtons.push(addPageButton({ pageNum: page, activeClass: true }));
    // Last page
    page < pageCount - 1 &&
      pageButtons.push(
        <button
          className="join-item btn btn-xs sm:btn-md bg-base-200 border-none"
          ley="dots-2"
        >
          ...
        </button>
      );
    pageButtons.push(
      addPageButton({ pageNum: pageCount, activeClass: page === pageCount })
    );
    return pageButtons;
  };

  // Guard clause
  if (pageCount < 1) return null;

  // Returned JSX
  return (
    <div className="mt-16 flex justify-end">
      <div className="join">
        {/* PREV */}
        <button
          className="btn btn-xs sm:btn-md join-item uppercase bg-base-200 hover:bg-base-300 border-none"
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}
        >
          Prev
        </button>
        {/* NUMBERS */}
        {renderPageButton()}
        {/* NEXT */}
        <button
          className="btn btn-xs sm:btn-md join-item uppercase bg-base-200 hover:bg-base-300 border-none"
          onClick={() => handlePageChange(page + 1)}
          disabled={page === pageCount}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default ComplexPaginationContainer;
