import MangmentHiddenItem from "../../components/utils/managment-hidden-item";
import BreadcrumbHeader from "../../components/overal/breadcrumb-header";
import RenderFoods from "../../components/food/renderFoods";
import { SwipeListView } from "react-native-swipe-list-view";
import Container from "../../components/overal/container";
import { useNavigation } from "@react-navigation/native";
import AddBtn from "../../components/utils/add-btn";
import { useEffect, useState } from "react";
import handleDelete from "./handleDelete";
import fetchData from "./fetchData";
import { View } from "react-native";
import styles from "./styles";

export default function FoodManagment() {
  const navigation: any = useNavigation();
  const [fetchNew, setFetchNew] = useState({});
  const [data, setData] = useState();

  useEffect(() => {
    fetchData(setData);
  }, [fetchNew]);

  const fetchNewData = () => {
    setFetchNew({});
  };

  return (
    <View style={styles.wrapper}>
      <BreadcrumbHeader />
      <Container style={{ gap: 20 }}>
        <AddBtn
          onPress={() => navigation.navigate("addFood")}
          style={{ alignSelf: "flex-end" }}
        />
        <SwipeListView
          renderItem={({ item }: any) => (
            <RenderFoods food={item} key={item.id} />
          )}
          contentContainerStyle={{ gap: 10 }}
          leftOpenValue={75}
          renderHiddenItem={({ item }: any) => {
            return (
              <MangmentHiddenItem
                onPress={() => handleDelete(item.id, fetchNewData)}
                item={item}
              />
            );
          }}
          data={data}
        />
      </Container>
    </View>
  );
}
