import { useLoaderData, useLocation, useNavigate } from "react-router-dom";

function PaginationContainer() {
  // Get the meta data from loader hook and get the page info
  const { meta } = useLoaderData();
  const { pageCount, page } = meta.pagination;

  // Construct the array with page numbers
  const pages = Array.from({ length: pageCount }, (_, index) => index + 1);

  // Get the query params, pathname and navigate object
  const { search, pathname } = useLocation();
  const navigate = useNavigate();

  // Page change handler function
  const handlePageChange = (pageNumber) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set("page", pageNumber);
    navigate(`${pathname}?${searchParams.toString()}`);
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
        {pages.map((pageNum) => (
          <button
            key={pageNum}
            className={`btn btn-xs sm:btn-md join-item bg-base-200 hover:bg-base-300 border-none ${
              pageNum === page ? "bg-base-300 border-base-300" : ""
            }`}
            onClick={() => handlePageChange(pageNum)}
          >
            {pageNum}
          </button>
        ))}
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

export default PaginationContainer;
