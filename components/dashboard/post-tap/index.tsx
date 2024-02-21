import { TabView, SceneMap } from "react-native-tab-view";
import { useWindowDimensions } from "react-native";
import Tabbar from "../../overal/tabbar";
import { useState } from "react";

const renderScene = SceneMap({});

export default function PostTab() {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);

  const [routes] = useState([
    { key: "first", title: "معرفی کتاب" },
    // { key: "second", title: "سبک پوشش" },
    // { key: "second", title: "هوش مصنوعی" },
    // { key: "second", title: "گردش گری" },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      initialLayout={{ width: layout.width }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      overScrollMode="never"
      renderTabBar={Tabbar}
    />
  );
}
