import BreadcrumbHeader from "../../components/overal/breadcrumb-header";
import SearchInputs from "../../components/utils/search-input";
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
  const [search, setSearch] = useState("");
  const [data, setData] = useState({
    totoalUsers: 0,
    users: [],
  });

  useEffect(() => {
    fetchData({ setData, page, take, search });
  }, [page, search]);

  return (
    <View>
      <BreadcrumbHeader />
      <Container style={{ flex: 0 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-start",
            gap: 10,
            marginBottom: 20,
          }}
        >
          <SearchInputs setSearch={setSearch} style={{ flex: 1 }} />
          <AddBtn
            onPress={() => navigation.navigate("addUser")}
            style={{ marginBottom: 10 }}
          />
        </View>
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
                  <RenderUser item={item} key={item.id} />
                ) : (
                  <Pagination
                    key={item.id}
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
