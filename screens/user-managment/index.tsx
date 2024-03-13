import BreadcrumbHeader from "../../components/overal/breadcrumb-header";
import RenderUser from "../../components/user/render-user";
import Pagination from "../../components/utils/pagination";
import Container from "../../components/overal/container";
import verticalTable from "../../styles/verticalTable";
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
      <Container style={{ flex: 0 }}>
        <AddBtn
          onPress={() => navigation.navigate("addUser")}
          style={{ marginBottom: 10 }}
        />
        {!!data.users.length && (
          <FlatList
            contentContainerStyle={[
              verticalTable.table,
              { paddingBottom: 480 },
            ]}
            data={[...data.users, { pagination: true }]}
            renderItem={({ item }: any) => (
              <>
                {!item.pagination ? (
                  <RenderUser item={item} />
                ) : (
                  <Pagination
                    style={{ marginTop: 20 }}
                    countItems={data.totoalUsers}
                    setPage={setPage}
                    take={take}
                    page={page}
                  />
                )}
              </>
            )}
          />
        )}
      </Container>
    </View>
  );
}
