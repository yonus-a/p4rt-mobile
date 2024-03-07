import { TabView, SceneMap } from "react-native-tab-view";
import { useWindowDimensions } from "react-native";
import NewPosts from "../../post/newPosts";
import Tabbar from "../../overal/tabbar";
import { useState } from "react";

const renderScene = SceneMap({
  book: () => <NewPosts take={10} categoryId={17} />,
  fashon: () => <NewPosts take={10} categoryId={19} />,
  tourism: () => <NewPosts take={10} categoryId={44} />,
  ai: () => <NewPosts take={10} categoryId={41} />,
});

export default function GrowthPostTab() {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);

  const [routes] = useState([
    { key: "book", title: "معرفی کتاب" },
    { key: "fashon", title: "سبک پوشش" },
    { key: "ai", title: "هوش مصنوعی" },
    { key: "tourism", title: "گردش گری" },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      style={{ height: 390 }}
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
