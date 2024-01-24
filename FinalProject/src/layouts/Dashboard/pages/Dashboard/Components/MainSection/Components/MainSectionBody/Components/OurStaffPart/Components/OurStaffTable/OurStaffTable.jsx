import React, { useEffect } from "react";
import StaffTr from "./Components/StaffTr";
import StaffTableHead from "./Components/StaffTableHead";
import TablePagination from "./Components/Pagination/TablePagination";
import { AdminCall } from "../../../../../../../../../../../../services/Admin";
import { useState } from "react";

export default function OurStaffTable() {
  const [adminData, setAdminData] = useState([]);

  useEffect(() => {
    AdminCall().then((r) => {
      const data = r?.data;
      setAdminData(data);
    });
  }, []);

  return (
    <>
      <div className="table-main-container">
        <div className="table-div">
          <table className="product-table">
            <thead className="table-head">
              <StaffTableHead />
            </thead>
            <tbody className="table-body">
              {adminData?.map((admin) => {
                return <StaffTr admin={admin} />;
              })}
            </tbody>
          </table>
        </div>
        <TablePagination />
      </div>
    </>
  );
}
