import React from "react";
import BulkDeleteAdd from "./Components/BulkDeleteAdd";
import ExportImport from "./Components/ExportImport";

export default function DeteletAdd() {
  return (
    <>
      <div className="delete-add-section">
        <div className="section-inner">
          <form action="" className="add-delete-form">
            <ExportImport />
            <BulkDeleteAdd />
          </form>
        </div>
      </div>
    </>
  );
}
