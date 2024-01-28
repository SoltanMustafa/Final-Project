import React, { useContext, useState } from "react";
import { DashboardContext } from "../../../../../../../../../contexts/DashboardContext";

export default function HeaderMenu() {
  const { setAdmin } = useContext(DashboardContext);

  const handleLogOut = () => {
    setAdmin(null);
    localStorage.removeItem("token");
    localStorage.removeItem("admin");
  };

  const [dropdown, setDropdown] = useState(false);
  const handleDropdown = (e) => {
    e.preventDefault();
    setDropdown((prevDrop) => !prevDrop);
  };
  return (
    <>
      <ul className="flex items-center gap-[8px]">
        <li className="notification">
          <a href="">
            {/*?xml version="1.0" ?*/}
            <svg
              height={24}
              viewBox="0 0 24 24"
              width={24}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 22a2.98 2.98 0 0 0 2.818-2H9.182A2.98 2.98 0 0 0 12 22zm7-7.414V10c0-3.217-2.185-5.927-5.145-6.742C13.562 2.52 12.846 2 12 2s-1.562.52-1.855 1.258C7.185 4.074 5 6.783 5 10v4.586l-1.707 1.707A.996.996 0 0 0 3 17v1a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-1a.996.996 0 0 0-.293-.707L19 14.586z" />
            </svg>
          </a>
        </li>
        <li className="admin-icon">
          <a href="" onClick={handleDropdown}>
            {/*?xml version="1.0" ?*/}
            <svg
              id="user"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title />
              <path d="M22.56,16.53a9.95,9.95,0,0,1-13.12,0A15,15,0,0,0,1,30a1,1,0,0,0,1,1H30a1,1,0,0,0,1-1A15,15,0,0,0,22.56,16.53Z" />
              <circle cx={16} cy={9} r={8} />
            </svg>
          </a>
          <ul className={`dropdown ${dropdown ? "dropdown-show" : ""}`}>
            <li>
              <i className="fa-solid fa-gear"></i>
              <span>Profile Settings</span>
            </li>
            <li onClick={handleLogOut}>
              <i className="fa-solid fa-right-from-bracket"></i>
              <span>Log out</span>
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
}
