import { configureStore } from "@reduxjs/toolkit";
import burgerReducer from "./features/counter/BurgerMenu";
import stickyHeaderReducer from "./features/counter/StickyHeader";
import quickViewReducer from "./features/counter/QuickMenu";
import filterMenuReducer from "./features/counter/ShopFilter";

export const store = configureStore({
  reducer: {
    stickyHeader: stickyHeaderReducer,
    sideMenu: burgerReducer,
    quickView: quickViewReducer,
    filterMenu: filterMenuReducer,
  },
});
