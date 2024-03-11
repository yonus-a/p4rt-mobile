import BreadcrumbHeader from "../../components/overal/breadcrumb-header";
import RenderUser from "../../components/user/render-user";
import Container from "../../components/overal/container";
import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { View } from "react-native";
import fetchData from "./fetchData";

export default function UserManagment() {
  const [page, setPage] = useState();
  const [user, setData] = useState([]);
  const take = 10;

  useEffect(() => {
    fetchData({ setData, page, take });
  }, [page])

  return (
    <View>
      <BreadcrumbHeader />
      <Container>
        <FlatList
          data={user}
          renderItem={({ item }) => <RenderUser item={item} />}
        />
      </Container>
    </View>
  );
}
