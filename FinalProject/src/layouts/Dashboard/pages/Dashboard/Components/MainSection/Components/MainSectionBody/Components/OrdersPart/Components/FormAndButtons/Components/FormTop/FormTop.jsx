import React from "react";
import SearchInput from "./Components/SearchInput";
import StatusSelect from "./Components/StatusSelect";
import OrderLimitSelect from "./Components/OrderLimitSelect";
import MethodSelect from "./Components/MethodSelect";
import DownloadButton from "./Components/DownloadButton";

export default function FormTop() {
  return (
    <>
      <div className="form-top">
        <SearchInput />
        <StatusSelect />
        <OrderLimitSelect />
        <MethodSelect />
        <DownloadButton />
      </div>
    </>
  );
}
