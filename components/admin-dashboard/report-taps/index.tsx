import { SceneMap, TabView } from "react-native-tab-view";
import { useWindowDimensions } from "react-native";
import useClear from "../../../hooks/useClear";
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

  useClear(() => {
    setIndex(0);
  });

  return (
    <TabView
      sceneContainerStyle={{ backgroundColor: "#fff" }}
      onIndexChange={(idx) => setIndex(idx)}
      style={{ height: 700, marginTop: 30 }}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      initialLayout={layout}
      renderTabBar={Tabbar}
      swipeEnabled={false}
    />
  );
}
