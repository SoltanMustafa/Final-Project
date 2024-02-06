import { configureStore } from "@reduxjs/toolkit";
import burgerReducer from "./features/counter/BurgerMenu";
import stickyHeaderReducer from "./features/counter/StickyHeader";
import quickViewReducer from "./features/counter/QuickMenu";
import filterMenuReducer from "./features/counter/ShopFilter";
import dashboardSideReucer from "./features/counter/DashboardSide";
import productAddReducer from "./features/counter/ProductAdd";
import productupdateReducer from "./features/counter/ProductUpdate";
import productDeleteReducer from "./features/counter/ProductDelete";
import brandAddReducer from "./features/counter/BrandAdd";
import brandUpdateReducer from "./features/counter/BrandUpdate";
import staffAddReducer from "./features/counter/StaffAdd";
import staffUpdateReducer from "./features/counter/StaffUpdate";
import editAdminDataReducer from "./features/counter/EditAdminData";
import brandImageAddReducer from "./features/counter/BrandImageAdd";
import addProductDataReducer from "./features/counter/AddProductData";
import editProductDataReducer from "./features/counter/ProductUpdateDelete";
import updateProductDataReducer from "./features/counter/UpdateProductData";
import editBrandDataRecuer from "./features/counter/BrandUpdateDelete";

export const store = configureStore({
  reducer: {
    stickyHeader: stickyHeaderReducer,
    sideMenu: burgerReducer,
    quickView: quickViewReducer,
    filterMenu: filterMenuReducer,
    sideBar: dashboardSideReucer,
    productAdd: productAddReducer,
    productUpdate: productupdateReducer,
    productDelete: productDeleteReducer,
    brandAdd: brandAddReducer,
    brandUpdate: brandUpdateReducer,
    staffAdd: staffAddReducer,
    staffUpdate: staffUpdateReducer,
    editAdminData: editAdminDataReducer,
    brandImageAdd: brandImageAddReducer,
    addProductData: addProductDataReducer,
    editProductData: editProductDataReducer,
    updateProductData: updateProductDataReducer,
    editBrandData: editBrandDataRecuer,
  },
});
