import React from "react";
import SearchInput from "./Components/SearchInput";
import SelectRole from "./Components/SelectRole";
import AddStaff from "./Components/AddStaff";
import FilterReset from "./Components/FilterReset";

export default function FormAndButtons() {
  return (
    <>
      <div className="form-and-buttons">
        <div className="content-container">
          <form action="">
            <SearchInput />
            <SelectRole />
            <AddStaff />
            <FilterReset />
          </form>
        </div>
      </div>
    </>
  );
}
