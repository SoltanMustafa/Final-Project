import React from "react";
import StaffTr from "./Components/StaffTr";
import StaffTableHead from "./Components/StaffTableHead";
import TablePagination from "./Components/Pagination/TablePagination";

export default function OurStaffTable() {
  return (
    <>
      <div className="table-main-container">
        <div className="table-div">
          <table className="product-table">
            <thead className="table-head">
              <StaffTableHead />
            </thead>
            <tbody className="table-body">
              <StaffTr />
              <StaffTr />
              <StaffTr />
              <StaffTr />
              <StaffTr />
              <StaffTr />
              <StaffTr />
              <StaffTr />
            </tbody>
          </table>
        </div>
        <TablePagination />
      </div>
    </>
  );
}
