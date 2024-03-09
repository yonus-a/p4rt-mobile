import { TabView, SceneMap } from "react-native-tab-view";
import { useWindowDimensions } from "react-native";
import NewPosts from "../../post/newPosts";
import Tabbar from "../../overal/tabbar";
import { useState } from "react";

const renderScene = SceneMap({
  health: () => <NewPosts take={10} categoryId={34} />,
  bio: () => <NewPosts take={10} categoryId={28} />,
  art: () => <NewPosts take={10} categoryId={1} />,
  employee: () => <NewPosts take={10} categoryId={29} />,
});

export default function RefahiPostTab() {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);

  const [routes] = useState([
    { key: "health", title: "سلامتی و تندرستی" },
    { key: "bio", title: "بیوگرافی" },
    { key: "art", title: "هنر و سرگرمی" },
    { key: "employee", title: "کارمند های نمونه" },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      style={{ height: 390, marginBottom: 180 }}
      sceneContainerStyle={{
        paddingHorizontal: 20,
        paddingBottom: 70,
        height: 490,
      }}
      initialLayout={layout}
      renderScene={renderScene}
      onIndexChange={setIndex}
      overScrollMode="never"
      renderTabBar={Tabbar}
    />
  );
}
