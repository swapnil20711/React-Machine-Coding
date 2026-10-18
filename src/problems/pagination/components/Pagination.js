export const Pagination = ({ handleNextClick, handlePrevClick, currentPage, setCurrentPage, noOfPages }) => {
    return (
        <div className="pagination-container">
            <button disabled={currentPage === 0} className={"page-number"} onClick={handlePrevClick}>⬅️</button>
            {
                [...Array(noOfPages).keys()].map((n) => (<button onClick={() => { setCurrentPage(n) }} key={n} className={"page-number " + (n === currentPage ? "active" : "")}>{n}</button>))
            }
            <button disabled={currentPage === noOfPages - 1} className={"page-number"} onClick={handleNextClick}>➡️</button>
        </div>
    )
}