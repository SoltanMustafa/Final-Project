import React from "react";

export default function ViewMode() {
  return (
    <>
      <div className="view-mode">
        <div className="limited-wrap">
          <div className="inside-div">
            <span>Show: </span>
            <select name="" id="" className="select-field">
              <option value="">12</option>
              <option value="">24</option>
              <option value="">36</option>
            </select>
          </div>
        </div>
        <div className="view-style">
          <a href="" className="three-products">
            {/*?xml version="1.0" ?*/}
            <svg
              height="16px"
              id="Layer_1"
              style={{ enableBackground: "new 0 0 16 16" }}
              version="1.1"
              viewBox="0 0 16 16"
              width="16px"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <path d="M3,0H1C0.45,0,0,0.45,0,1v2c0,0.55,0.45,1,1,1h2c0.55,0,1-0.45,1-1V1C4,0.45,3.55,0,3,0z M9,0H7C6.45,0,6,0.45,6,1v2  c0,0.55,0.45,1,1,1h2c0.55,0,1-0.45,1-1V1C10,0.45,9.55,0,9,0z M15,0h-2c-0.55,0-1,0.45-1,1v2c0,0.55,0.45,1,1,1h2  c0.55,0,1-0.45,1-1V1C16,0.45,15.55,0,15,0z M3,6H1C0.45,6,0,6.45,0,7v2c0,0.55,0.45,1,1,1h2c0.55,0,1-0.45,1-1V7C4,6.45,3.55,6,3,6  z M9,6H7C6.45,6,6,6.45,6,7v2c0,0.55,0.45,1,1,1h2c0.55,0,1-0.45,1-1V7C10,6.45,9.55,6,9,6z M15,6h-2c-0.55,0-1,0.45-1,1v2  c0,0.55,0.45,1,1,1h2c0.55,0,1-0.45,1-1V7C16,6.45,15.55,6,15,6z M3,12H1c-0.55,0-1,0.45-1,1v2c0,0.55,0.45,1,1,1h2  c0.55,0,1-0.45,1-1v-2C4,12.45,3.55,12,3,12z M9,12H7c-0.55,0-1,0.45-1,1v2c0,0.55,0.45,1,1,1h2c0.55,0,1-0.45,1-1v-2  C10,12.45,9.55,12,9,12z M15,12h-2c-0.55,0-1,0.45-1,1v2c0,0.55,0.45,1,1,1h2c0.55,0,1-0.45,1-1v-2C16,12.45,15.55,12,15,12z" />
            </svg>
          </a>
          <a href="" className="detailed-view">
            {/*?xml version="1.0" ?*/}
            <svg
              data-name="Layer 1"
              id="Layer_1"
              viewBox="0 0 64 64"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title />
              <rect height="10.04" width="10.04" y="3.96" />
              <rect height="10.04" width="47.06" x="16.94" y="3.96" />
              <rect height="10.04" width="10.04" y="26.98" />
              <rect height="10.04" width="47.06" x="16.94" y="26.98" />
              <rect height="10.04" width="10.04" y="50.01" />
              <rect height="10.04" width="47.06" x="16.94" y="50.01" />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
}
