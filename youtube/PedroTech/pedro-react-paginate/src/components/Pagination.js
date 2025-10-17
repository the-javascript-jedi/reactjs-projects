import React, { useState } from "react";
import ReactPaginate from "react-paginate";

import JsonData from "../MOCK_DATA.json";
const Pagination = () => {
  const [users, setUsers] = useState(JsonData.slice(0, 50));
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 10;
  const pagesVisited = pageNumber * usersPerPage;
  // 0th Page=0*10=0;
  // 1st Page=1*10=10;
  // 2nd Page=2*10=20;
  const displayUsers = () =>
    //  slice=0,10(0+10)
    //  slice=10,20(10+10)
    //  slice=20,30(20+10)
    users.slice(pagesVisited, pagesVisited + usersPerPage).map((user) => {
      return (
        <div className="user-box" key={user.id}>
          <h3>{user.firstName}</h3>
          <h3>{user.lastName}</h3>
          <h3>{user.email}</h3>
        </div>
      );
    });
  // calculate pagecount
  const pageCount = Math.ceil(users.length / usersPerPage);
  //destructure selected which will contain the clicked page number
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <div className="pagination-holder">
      Pagination
      <br />
      {displayUsers()}
      {/* Paginate Compomemt */}
      <ReactPaginate
        previousLabel="previous"
        nextLabel="next"
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
  );
};

export default Pagination;
