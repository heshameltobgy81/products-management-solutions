import React from 'react';


export default function ProductPagination({activePage, totalPages, setActivePage}) {

    return (
        <>
          <div className="pagination">
            <button disabled={activePage === 1} onClick={() => setActivePage(1)}>
              First
            </button>
            <button disabled={activePage === 1} onClick={() => setActivePage(activePage - 1)}>
              Previous
            </button>
            <button disabled={activePage === totalPages} onClick={() => setActivePage(activePage + 1)}>
              Next
            </button>
            <button disabled={activePage === totalPages} onClick={() => setActivePage(totalPages)}>
              Last
            </button>
          </div>
        </>
      )

}
