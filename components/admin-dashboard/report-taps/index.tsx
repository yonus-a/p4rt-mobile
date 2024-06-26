import { SceneMap, TabView } from "react-native-tab-view";
import { useWindowDimensions } from "react-native";
import MonthlyReport from "../monthly-report";
import WeeklyReport from "../weekly-report";
import DailyReport from "../daily-report";
import Tabbar from "../../overal/tabbar";
import { useState } from "react";

const renderScene = SceneMap({
  monthly: MonthlyReport,
  weekly: WeeklyReport,
  daily: DailyReport,
});

export default function ReportTabs() {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);

  const [routes] = useState([
    { key: "daily", title: "روزانه" },
    { key: "weekly", title: "هفتگی" },
    { key: "monthly", title: "ماهیانه" },
  ]);

  return (
    <TabView
      onIndexChange={(idx) => setIndex(idx)}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      initialLayout={layout}
      style={{ height: 670 }}
      renderTabBar={Tabbar}
    />
  );
}
