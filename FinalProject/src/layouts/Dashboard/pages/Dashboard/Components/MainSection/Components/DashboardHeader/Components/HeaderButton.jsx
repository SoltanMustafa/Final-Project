import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  CloseBarMenu,
  OpenBarMenu,
} from "../../../../../../../../../RTK/features/counter/DashboardSide";

export default function HeaderButton() {
  const dispatch = useDispatch();
  const sideBarActive = useSelector((state) => state.sideBar.sideBarActive);

  const handleSideMenu = () => {
    if (sideBarActive) {
      dispatch(CloseBarMenu());
    } else {
      dispatch(OpenBarMenu());
    }
  };
  return (
    <>
      <button type="button" className="burger-button" onClick={handleSideMenu}>
        {sideBarActive ? (
          <div>
            {/*?xml version="1.0" ?*/}
            <svg
              height={24}
              viewBox="0 0 16 16"
              width={24}
              xmlns="http://www.w3.org/2000/svg"
            >
              <polygon
                fillRule="evenodd"
                points="8 9.414 3.707 13.707 2.293 12.293 6.586 8 2.293 3.707 3.707 2.293 8 6.586 12.293 2.293 13.707 3.707 9.414 8 13.707 12.293 12.293 13.707 8 9.414"
              />
            </svg>
          </div>
        ) : (
          <div>
            {/*?xml version="1.0" ?*/}
            <svg
              id="Layer_1_1_"
              style={{ enableBackground: "new 0 0 16 16" }}
              version="1.1"
              viewBox="0 0 16 16"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <rect height={2} width={16} />
              <rect height={2} width={16} y={7} />
              <rect height={2} width={16} y={14} />
            </svg>
          </div>
        )}
      </button>
    </>
  );
}
