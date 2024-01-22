import React from "react";

export default function LeftBarMenu({ menuSelection, handleMenuSelection }) {
  return (
    <>
      <ul className="left-bar-menu">
        <li
          className={`relative ${menuSelection === 1 ? "select-relative" : ""}`}
          onClick={(e) => {
            e.preventDefault();
            handleMenuSelection(1);
          }}
        >
          <a href="" className="link-a">
            {/*?xml version="1.0" ?*/}
            <svg
              fill="none"
              height={15}
              viewBox="0 0 15 15"
              width={15}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M2.8 1L2.74967 0.99997C2.52122 0.999752 2.32429 0.999564 2.14983 1.04145C1.60136 1.17312 1.17312 1.60136 1.04145 2.14983C0.999564 2.32429 0.999752 2.52122 0.99997 2.74967L1 2.8V5.2L0.99997 5.25033C0.999752 5.47878 0.999564 5.67572 1.04145 5.85017C1.17312 6.39864 1.60136 6.82688 2.14983 6.95856C2.32429 7.00044 2.52122 7.00025 2.74967 7.00003L2.8 7H5.2L5.25033 7.00003C5.47878 7.00025 5.67572 7.00044 5.85017 6.95856C6.39864 6.82688 6.82688 6.39864 6.95856 5.85017C7.00044 5.67572 7.00025 5.47878 7.00003 5.25033L7 5.2V2.8L7.00003 2.74967C7.00025 2.52122 7.00044 2.32429 6.95856 2.14983C6.82688 1.60136 6.39864 1.17312 5.85017 1.04145C5.67572 0.999564 5.47878 0.999752 5.25033 0.99997L5.2 1H2.8ZM2.38328 2.01382C2.42632 2.00348 2.49222 2 2.8 2H5.2C5.50779 2 5.57369 2.00348 5.61672 2.01382C5.79955 2.05771 5.94229 2.20045 5.98619 2.38328C5.99652 2.42632 6 2.49222 6 2.8V5.2C6 5.50779 5.99652 5.57369 5.98619 5.61672C5.94229 5.79955 5.79955 5.94229 5.61672 5.98619C5.57369 5.99652 5.50779 6 5.2 6H2.8C2.49222 6 2.42632 5.99652 2.38328 5.98619C2.20045 5.94229 2.05771 5.79955 2.01382 5.61672C2.00348 5.57369 2 5.50779 2 5.2V2.8C2 2.49222 2.00348 2.42632 2.01382 2.38328C2.05771 2.20045 2.20045 2.05771 2.38328 2.01382ZM9.8 1L9.74967 0.99997C9.52122 0.999752 9.32429 0.999564 9.14983 1.04145C8.60136 1.17312 8.17312 1.60136 8.04145 2.14983C7.99956 2.32429 7.99975 2.52122 7.99997 2.74967L8 2.8V5.2L7.99997 5.25033C7.99975 5.47878 7.99956 5.67572 8.04145 5.85017C8.17312 6.39864 8.60136 6.82688 9.14983 6.95856C9.32429 7.00044 9.52122 7.00025 9.74967 7.00003L9.8 7H12.2L12.2503 7.00003C12.4788 7.00025 12.6757 7.00044 12.8502 6.95856C13.3986 6.82688 13.8269 6.39864 13.9586 5.85017C14.0004 5.67572 14.0003 5.47878 14 5.25033L14 5.2V2.8L14 2.74967C14.0003 2.52122 14.0004 2.32429 13.9586 2.14983C13.8269 1.60136 13.3986 1.17312 12.8502 1.04145C12.6757 0.999564 12.4788 0.999752 12.2503 0.99997L12.2 1H9.8ZM9.38328 2.01382C9.42632 2.00348 9.49222 2 9.8 2H12.2C12.5078 2 12.5737 2.00348 12.6167 2.01382C12.7995 2.05771 12.9423 2.20045 12.9862 2.38328C12.9965 2.42632 13 2.49222 13 2.8V5.2C13 5.50779 12.9965 5.57369 12.9862 5.61672C12.9423 5.79955 12.7995 5.94229 12.6167 5.98619C12.5737 5.99652 12.5078 6 12.2 6H9.8C9.49222 6 9.42632 5.99652 9.38328 5.98619C9.20045 5.94229 9.05771 5.79955 9.01382 5.61672C9.00348 5.57369 9 5.50779 9 5.2V2.8C9 2.49222 9.00348 2.42632 9.01382 2.38328C9.05771 2.20045 9.20045 2.05771 9.38328 2.01382ZM2.74967 7.99997L2.8 8H5.2L5.25033 7.99997C5.47878 7.99975 5.67572 7.99956 5.85017 8.04145C6.39864 8.17312 6.82688 8.60136 6.95856 9.14983C7.00044 9.32429 7.00025 9.52122 7.00003 9.74967L7 9.8V12.2L7.00003 12.2503C7.00025 12.4788 7.00044 12.6757 6.95856 12.8502C6.82688 13.3986 6.39864 13.8269 5.85017 13.9586C5.67572 14.0004 5.47878 14.0003 5.25033 14L5.2 14H2.8L2.74967 14C2.52122 14.0003 2.32429 14.0004 2.14983 13.9586C1.60136 13.8269 1.17312 13.3986 1.04145 12.8502C0.999564 12.6757 0.999752 12.4788 0.99997 12.2503L1 12.2V9.8L0.99997 9.74967C0.999752 9.52122 0.999564 9.32429 1.04145 9.14983C1.17312 8.60136 1.60136 8.17312 2.14983 8.04145C2.32429 7.99956 2.52122 7.99975 2.74967 7.99997ZM2.8 9C2.49222 9 2.42632 9.00348 2.38328 9.01382C2.20045 9.05771 2.05771 9.20045 2.01382 9.38328C2.00348 9.42632 2 9.49222 2 9.8V12.2C2 12.5078 2.00348 12.5737 2.01382 12.6167C2.05771 12.7995 2.20045 12.9423 2.38328 12.9862C2.42632 12.9965 2.49222 13 2.8 13H5.2C5.50779 13 5.57369 12.9965 5.61672 12.9862C5.79955 12.9423 5.94229 12.7995 5.98619 12.6167C5.99652 12.5737 6 12.5078 6 12.2V9.8C6 9.49222 5.99652 9.42632 5.98619 9.38328C5.94229 9.20045 5.79955 9.05771 5.61672 9.01382C5.57369 9.00348 5.50779 9 5.2 9H2.8ZM9.8 8L9.74967 7.99997C9.52122 7.99975 9.32429 7.99956 9.14983 8.04145C8.60136 8.17312 8.17312 8.60136 8.04145 9.14983C7.99956 9.32429 7.99975 9.52122 7.99997 9.74967L8 9.8V12.2L7.99997 12.2503C7.99975 12.4788 7.99956 12.6757 8.04145 12.8502C8.17312 13.3986 8.60136 13.8269 9.14983 13.9586C9.32429 14.0004 9.52122 14.0003 9.74967 14L9.8 14H12.2L12.2503 14C12.4788 14.0003 12.6757 14.0004 12.8502 13.9586C13.3986 13.8269 13.8269 13.3986 13.9586 12.8502C14.0004 12.6757 14.0003 12.4788 14 12.2503L14 12.2V9.8L14 9.74967C14.0003 9.52122 14.0004 9.32429 13.9586 9.14983C13.8269 8.60136 13.3986 8.17312 12.8502 8.04145C12.6757 7.99956 12.4788 7.99975 12.2503 7.99997L12.2 8H9.8ZM9.38328 9.01382C9.42632 9.00348 9.49222 9 9.8 9H12.2C12.5078 9 12.5737 9.00348 12.6167 9.01382C12.7995 9.05771 12.9423 9.20045 12.9862 9.38328C12.9965 9.42632 13 9.49222 13 9.8V12.2C13 12.5078 12.9965 12.5737 12.9862 12.6167C12.9423 12.7995 12.7995 12.9423 12.6167 12.9862C12.5737 12.9965 12.5078 13 12.2 13H9.8C9.49222 13 9.42632 12.9965 9.38328 12.9862C9.20045 12.9423 9.05771 12.7995 9.01382 12.6167C9.00348 12.5737 9 12.5078 9 12.2V9.8C9 9.49222 9.00348 9.42632 9.01382 9.38328C9.05771 9.20045 9.20045 9.05771 9.38328 9.01382Z"
                fill="currentColor"
                fillRule="evenodd"
              />
            </svg>

            <span>Dashboard</span>
          </a>
        </li>
        <li
          className={`relative ${menuSelection === 2 ? "select-relative" : ""}`}
          onClick={(e) => {
            e.preventDefault();
            handleMenuSelection(2);
          }}
        >
          <a href="" className="link-a">
            {/*?xml version="1.0" ?*/}
            <svg
              id="icon"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <style
                  dangerouslySetInnerHTML={{ __html: ".cls-1{fill:none;}" }}
                />
              </defs>
              <title />
              <path
                d="M26,2H8A2,2,0,0,0,6,4V8H4v2H6v5H4v2H6v5H4v2H6v4a2,2,0,0,0,2,2H26a2,2,0,0,0,2-2V4A2,2,0,0,0,26,2Zm0,26H8V24h2V22H8V17h2V15H8V10h2V8H8V4H26Z"
                transform="translate(0 0)"
              />
              <rect height={2} width={8} x={14} y={8} />
              <rect height={2} width={8} x={14} y={15} />
              <rect height={2} width={8} x={14} y={22} />
              <rect
                className="cls-1"
                data-name="<Transparent Rectangle>"
                height={32}
                id="_Transparent_Rectangle_"
                width={32}
              />
            </svg>

            <span>Products</span>
          </a>
        </li>
        <li
          className={`relative ${menuSelection === 3 ? "select-relative" : ""}`}
          onClick={(e) => {
            e.preventDefault();
            handleMenuSelection(3);
          }}
        >
          <a href="" className="link-a">
            {/*?xml version="1.0" ?*/}
            <svg
              height={48}
              viewBox="0 0 48 48"
              width={48}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h48v48H0z" fill="none" />
              <path d="M6 26h16V6H6v20zm0 16h16V30H6v12zm20 0h16V22H26v20zm0-36v12h16V6H26z" />
            </svg>

            <span>Brands</span>
          </a>
        </li>
        <li
          className={`relative ${menuSelection === 4 ? "select-relative" : ""}`}
          onClick={(e) => {
            e.preventDefault();
            handleMenuSelection(4);
          }}
        >
          <a href="" className="link-a">
            {/*?xml version="1.0" ?*/}
            <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
              <g id="Order_confirmation">
                <path d="M228.2588,453.47l2.04-18.38H90.209a10.0033,10.0033,0,0,1-10-10V88.15a10.0033,10.0033,0,0,1,10-10h211.14a10.0036,10.0036,0,0,1,10,10V246.62a55.7953,55.7953,0,0,1,15.24-9.14V60.61a32.7,32.7,0,0,0-32.7-32.7H97.6689a32.7,32.7,0,0,0-32.7,32.7V453.17a32.7,32.7,0,0,0,32.7,32.7h139.5A45.4382,45.4382,0,0,1,228.2588,453.47Zm-9.6,12.18h-45.76v-12h45.76Z" />
                <path d="M156.8589,166.84a23.8988,23.8988,0,1,1-23.82-25.82v-11a34.895,34.895,0,1,0,34.84,36.82Z" />
                <path d="M123.3818,153.4585l-8.8574,8.0957,13.1875,14.4277a6.0015,6.0015,0,0,0,4.39,1.9522h.039a6.0023,6.0023,0,0,0,4.376-1.8945L164.5117,146.2l-8.7519-8.2109-23.5616,25.1142Z" />
                <path d="M156.8589,261.9226a23.8988,23.8988,0,1,1-23.82-25.82v-11a34.8951,34.8951,0,1,0,34.84,36.82Z" />
                <path d="M123.3818,248.541l-8.8574,8.0957,13.1875,14.4278a6.0018,6.0018,0,0,0,4.39,1.9521h.039a6.0019,6.0019,0,0,0,4.376-1.8945l27.9951-29.8393-8.7519-8.211L132.1982,258.186Z" />
                <path d="M98.1387,355.0894a34.8967,34.8967,0,0,0,69.74,1.92h-11.02a23.8988,23.8988,0,1,1-23.82-25.82v-11A34.9381,34.9381,0,0,0,98.1387,355.0894Z" />
                <path d="M123.3818,343.6279l-8.8574,8.0957,13.1875,14.4278a6.0014,6.0014,0,0,0,4.39,1.9521h.039a6.0019,6.0019,0,0,0,4.376-1.8945L164.5117,336.37l-8.7519-8.2109-23.5616,25.1142Z" />
                <rect height={12} width="72.6846" x="192.8047" y="146.8691" />
                <rect height={12} width="50.5986" x="192.8047" y="170.9619" />
                <rect height={12} width="50.5986" x="192.8047" y="239.9688" />
                <rect height={12} width="72.333" x="192.8047" y="264.0615" />
                <path d="M453.917,454.3008,439.8076,327.4414A20.4882,20.4882,0,0,0,419.4238,309.2H391.39V289.85a44.365,44.365,0,0,0-43.5429-44.3063c-24.7925-.4248-45.084,20.2965-45.084,45.0926V309.2H274.7285a20.4883,20.4883,0,0,0-20.3838,18.2422l-14.164,127.35a33.3819,33.3819,0,0,0,33.1777,37.0737h146.94a33.8255,33.8255,0,0,0,33.6182-37.5649ZM314.7627,289.85a32.3513,32.3513,0,0,1,31.7559-32.3081c18.0766-.3076,32.871,14.8732,32.871,32.9524V309.2H314.7627ZM436.5635,472.5947a21.8536,21.8536,0,0,1-16.2647,7.271h-146.94a21.3834,21.3834,0,0,1-21.252-23.747l14.1641-127.35a8.5018,8.5018,0,0,1,8.458-7.5689h28.0342V345h12V321.2H379.39V345h12V321.2h28.0342a8.5017,8.5017,0,0,1,8.458,7.5684l14.1094,126.8593A21.8513,21.8513,0,0,1,436.5635,472.5947Z" />
              </g>
            </svg>

            <span>Orders</span>
          </a>
        </li>
        <li
          className={`relative ${menuSelection === 5 ? "select-relative" : ""}`}
          onClick={(e) => {
            e.preventDefault();
            handleMenuSelection(5);
          }}
        >
          <a href="" className="link-a">
            {/*?xml version="1.0" ?*/}
            <svg
              data-name="Layer 1"
              id="Layer_1"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M461.94,444.35H425.76v-174h36.18a5.38,5.38,0,1,0,0-10.76H420.37a5.38,5.38,0,0,0-5.38,5.38v68.22h-12.4c-32.82-32.21-72.69-47.25-106.44-54.87L296,264.44a95.66,95.66,0,0,0-69.17-91.38A61.2,61.2,0,0,0,200,56.89h-.27a61.2,61.2,0,0,0-26.18,116.39,95.64,95.64,0,0,0-68.42,92l.14,23.53c-2.23-1.18-4.33-2.29-6.28-3.3-17-8.86-34.14-6.71-48.2,6.09a18.67,18.67,0,0,0-6.08,14.22,19.18,19.18,0,0,0,6.89,14.34L181.51,428.39a68.35,68.35,0,0,0,44,16c2,0,4.1-.1,6.16-.28l143.72-12.68H415v18.34a5.38,5.38,0,0,0,5.38,5.38h41.57a5.38,5.38,0,1,0,0-10.76Zm-312.41-326a50.5,50.5,0,0,1,50.23-50.65H200a50.44,50.44,0,0,1,.19,100.88H200A50.49,50.49,0,0,1,149.53,118.3ZM115.86,265.18a84.81,84.81,0,0,1,84.36-85h.35a84.8,84.8,0,0,1,84.68,84.37l.11,11.53c-16.22-3.07-30.54-4.54-41.27-5.64l-4.16-.43c-13.18-1.38-24.57,1.86-34,9.62A21.37,21.37,0,0,0,209.71,315c18.16,9.41,34.38,18,45.4,23.84l-48.41,6.27c-9.28-5.26-57.6-32.62-90.67-50.53Zm259,155.47-144.21,12.7a57.59,57.59,0,0,1-42.25-13.23L58.47,311.84a8.39,8.39,0,0,1-3-6.3,7.8,7.8,0,0,1,2.55-6c10.81-9.83,22.92-11.31,36-4.52,32.44,16.89,108.18,59.91,108.94,60.34a5.51,5.51,0,0,0,3.35.66l65.14-8.44L304,365.33a5.38,5.38,0,0,0,5.16-9.45l-34.07-18.6,0,0h0s-26.89-14.5-60.35-31.84a10.44,10.44,0,0,1-5.65-8.33,10.28,10.28,0,0,1,3.72-9.18c7.14-5.87,15.89-8.34,26.07-7.24l4.19.44c33.51,3.43,103.22,10.59,153.56,61.22a5.4,5.4,0,0,0,3.81,1.59H415v76.71Z" />
            </svg>

            <span>Our Staff</span>
          </a>
        </li>
      </ul>
    </>
  );
}