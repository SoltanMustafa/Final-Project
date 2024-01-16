import React, { useEffect } from "react";
import PhoneHeaderTop from "./Components/PhoneHeadertop/PhoneHeaderTop";
import PhoneHeaderButtom from "./Components/PhoneHeaderButtom/PhoneHeaderButtom";
import { useDispatch, useSelector } from "react-redux";
import {
  ScrollDown,
  ScrollUp,
} from "../../../../RTK/features/counter/StickyHeader";

export default function PhoneHeader() {
  const dispatch = useDispatch();
  const scrollValue = useSelector((state) => state.stickyHeader.ScrollValue);

  const handleScroll = () => {
    const scrollPositin = window.scrollY;
    requestAnimationFrame(() => {
      if (scrollPositin > 100) {
        dispatch(ScrollDown());
      } else {
        dispatch(ScrollUp());
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, [dispatch]);

  return (
    <>
      <div
        className={`main-phoneheader ${
          scrollValue > 0 ? "sticky-phone-header" : ""
        }`}
      >
        <PhoneHeaderTop />
        <PhoneHeaderButtom />
      </div>
    </>
  );
}
