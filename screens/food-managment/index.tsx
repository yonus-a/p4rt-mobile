import BreadcrumbHeader from "../../components/overal/breadcrumb-header";
import RenderFoods from "../../components/food/renderFoods";
import Container from "../../components/overal/container";
import { useNavigation } from "@react-navigation/native";
import AddBtn from "../../components/utils/add-btn";
import { View, FlatList } from "react-native";
import { useEffect, useState } from "react";
import fetchData from "./fetchData";
import styles from "./styles";

export default function FoodManagment() {
  const navigation: any = useNavigation();
  const [data, setData] = useState();

  useEffect(() => {
    fetchData(setData);
  }, []);

  return (
    <View style={styles.wrapper}>
      <BreadcrumbHeader />
      <Container>
        <AddBtn onPress={() => navigation.navigate("addFood")} />
        <FlatList
          data={data}
          contentContainerStyle={{ gap: 10 }}
          renderItem={({ item }) => <RenderFoods food={item} />}
        />
      </Container>
    </View>
  );
}
