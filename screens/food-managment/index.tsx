import MangmentHiddenItem from "../../components/utils/managment-hidden-item";
import { SwipeListView } from "react-native-swipe-list-view";
import RenderFoods from "../../components/food/renderFoods";
import Container from "../../components/overal/container";
import { useNavigation } from "@react-navigation/native";
import AddBtn from "../../components/utils/add-btn";
import Header from "../../components/overal/header";
import { useEffect, useState } from "react";
import handleDelete from "./handleDelete";
import { ScrollView } from "react-native";
import fetchData from "./fetchData";
import { View } from "react-native";
import styles from "./styles";

export default function FoodManagment() {
  const navigation: any = useNavigation();
  const [fetchNew, setFetchNew] = useState({});
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData(setData);
  }, [fetchNew]);

  const fetchNewData = () => {
    setFetchNew({});
  };

  return (
    <View style={styles.wrapper}>
      <Header />
      <ScrollView>
        <Container style={{ gap: 20 }}>
          <SwipeListView
            renderItem={({ item }: any) => (
              <RenderFoods food={item} key={item.id} />
            )}
            contentContainerStyle={{ gap: 10 }}
            showsVerticalScrollIndicator={false}
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
          <AddBtn onPress={() => navigation.navigate("addFood")} />
        </Container>
      </ScrollView>
    </View>
  );
}
