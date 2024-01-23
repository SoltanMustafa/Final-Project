import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CloseProductDelete } from "../../../../../../RTK/features/counter/ProductDelete";
import { setData } from "../../../../../../RTK/features/counter/EditAdminData";
import { AdminDelete } from "../../../../../../services/Admin";

export default function DeleteModule() {
  const editAdminDispatch = useDispatch();
  const productDeleteDispatch = useDispatch();
  const productDeleteActive = useSelector(
    (state) => state.productDelete.productDeleteActive
  );
  const editAdminData = useSelector((state) => state.editAdminData.editData);

  function handleCloseModule() {
    productDeleteDispatch(CloseProductDelete());
    editAdminDispatch(setData([]));
  }

  const deleteAdmin = () => {
    const id = editAdminData?._id;
    const data = {
      name: editAdminData.name,
      surname: editAdminData.surname,
      email: editAdminData.email,
      password: editAdminData.password,
    };
    console.log(id, data);
    AdminDelete({ id, data }).then((r) => console.log("delete", r));
  };
  return (
    <>
      <div
        className={`delete-wrapper ${
          productDeleteActive ? "delete-shower" : ""
        }`}
      >
        <div className="delete-container">
          <div className="container-body">
            <span className="text-center text-[24px] mb-6 text-red-500">
              <i className="fa-regular fa-trash-can"></i>
            </span>
            <h2 className="text-xl font-medium mb-2">
              Are You Sure! Want to Delete
              <span className="text-red-500">
                {" "}
                {editAdminData?.name || "T-shirt"}
              </span>
              ?
            </h2>
            <p className="text-sm">
              Do you really want to delete these records? You can't view this in
              your list anymore if you delete!
            </p>
          </div>
          <footer className="flex items-center justify-center px-6 py-3 bg-gray-50 -mx-6 -mb-4 gap-8">
            <button
              className="inline-flex items-center text-gray-600 rounded-lg px-4 py-2 border-gray-200 leading-5 bg-gray-300 h-12 hover:bg-white"
              onClick={handleCloseModule}
            >
              No, Keep it
            </button>
            <button
              className="inline-flex items-center text-white rounded-lg px-4 py-2 border-emerald-500 leading-5 bg-emerald-500 h-12 hover:bg-emerald-700"
              onClick={deleteAdmin}
            >
              Yes, Delete it
            </button>
          </footer>
        </div>
      </div>
    </>
  );
}
