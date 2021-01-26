import React from 'react';
import ReactPaginate from 'react-paginate';

import './footer.styles.scss';

const Footer = ({pageCount, handlePageClick, currentPage}) => (
    <div className='footer'>
        <ReactPaginate
            previousLabel={`${currentPage > 1 ? '<' : ''}`}
            nextLabel={">"}
            breakLabel={">>"}
            nextClassName={"next-label"}
            previousClassName={"next-label"}
            breakClassName={"break-me"}
            pageCount={pageCount}
            marginPagesDisplayed={0}
            pageRangeDisplayed={2}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}/>
    </div>
);

export default Footer;