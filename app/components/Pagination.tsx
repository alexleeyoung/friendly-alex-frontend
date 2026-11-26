type PaginationProps = {
  totalPages: number;
  currentPage: number;
  onBtnClick: (page: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onBtnClick,
}) => {
  if (totalPages <= 1) {
    return null;
  }
  return (
    <>
      <div className="pagination-flex">
        {Array.from({ length: totalPages }, (_, idx) => (
          <button
            key={idx + 1}
            className={`pagination-btn ${currentPage === idx + 1 ? "pagination-active" : ""}`}
            onClick={() => onBtnClick(idx + 1)}
          >
            {idx + 1}
          </button>
        ))}
      </div>
    </>
  );
};

export default Pagination;
