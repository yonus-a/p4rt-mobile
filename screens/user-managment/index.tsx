import BreadcrumbHeader from "../../components/overal/breadcrumb-header";
import RenderUser from "../../components/user/render-user";
import AddBtn from "../../components/utils/add-btn";
import { FlatList, View } from "react-native";
import { useEffect, useState } from "react";
import fetchData from "./fetchData";

export default function UserManagment({ navigation }) {
  const take = 10;
  const [page, setPage] = useState(0);
  const [data, setData] = useState({
    totoalUsers: 0,
    users: [],
  });

  useEffect(() => {
    fetchData({ setData, page, take });
  }, [page]);

  return (
    <View>
      <BreadcrumbHeader />
      <AddBtn onPress={() => navigation.navigate("addUser")} />
      <FlatList
        data={data.users}
        renderItem={({ item }) => <RenderUser item={item} />}
      />
    </View>
  );
}
