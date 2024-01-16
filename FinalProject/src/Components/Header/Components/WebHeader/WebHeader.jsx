import React, { useEffect } from "react";
import TopHeader from "./Components/TopHeader/TopHeader";
import BottomHeader from "./Components/BottomHeader/BottomHeader";
import { useDispatch, useSelector } from "react-redux";
import {
  ScrollDown,
  ScrollUp,
} from "../../../../RTK/features/counter/StickyHeader";

export default function WebHeader() {
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
      window.removeEventListener("scroll", handleScroll);
    };
  }, [dispatch]);

  return (
    <>
      <div
        className={`main-webheader ${scrollValue > 0 ? "sticky-header" : ""}`}
      >
        <TopHeader />
        <BottomHeader />
      </div>
    </>
  );
}
