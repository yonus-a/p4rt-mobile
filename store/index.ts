import adminReportReducer from "../components/admin-dashboard/admin-reports/admin-report-slice";
import monthlyReportSlice from "../components/admin-dashboard/monthly-report/monthlyReportSlice";
import weeklyReportSlice from "../components/admin-dashboard/weekly-report/weeklyReportSlice";
import dailyReportSlice from "../components/admin-dashboard/daily-report/dailyReportSlice";
import criticsItemSlice from "../components/critics/render-critics-item/criticsItemSlice";
import reportTabsSlice from "../components/admin-dashboard/report-taps/reportTabsSlice";
import growthMenuSlice from "../components/overal/growth-menu/growthMenuSlice";
import refahiMenuSlice from "../components/overal/refahi-menu/refahiMenuSlice";
import adminMenuSlice from "../components/overal/admin-menu/adminMenuSlide";
import addToCartSlice from "../components/food/add-to-cart/addToCartSlice";
import profileSlice from "../components/profile/profileSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    monthlyReport: monthlyReportSlice,
    growthMenuSlice: growthMenuSlice,
    weeklyReport: weeklyReportSlice,
    adminReport: adminReportReducer,
    dailyReport: dailyReportSlice,
    criticsItem: criticsItemSlice,
    growthMenu: growthMenuSlice,
    reportTab: reportTabsSlice,
    addToCart: addToCartSlice,
    adminMenu: adminMenuSlice,
    refahiMenu: refahiMenuSlice,
    profile: profileSlice,
  },
});

export const { dispatch }: any = store.dispatch;
export default store;
