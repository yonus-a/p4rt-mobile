import FilterWrapper from "../../components/utils/filter-wrapper";
import SearchInputs from "../../components/utils/search-input";
import RenderUser from "../../components/user/render-user";
import Pagination from "../../components/utils/pagination";
import Container from "../../components/overal/container";
import Menu from "../../components/overal/quick-panel";
import verticalTable from "../../styles/verticalTable";
import { Fragment, useEffect, useState } from "react";
import AddBtn from "../../components/utils/add-btn";
import Header from "../../components/overal/header";
import { FlatList, View } from "react-native";
import fetchData from "./fetchData";

export default function UserManagment({ navigation }) {
  const take = 10;
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [data, setData] = useState({
    totoalUsers: 0,
    users: [],
  });

  useEffect(() => {
    fetchData({ setData, page, take, search });
  }, [page, search]);

  return (
    <View style={{ flex: 1 }}>
      <Header />
      <Container>
        <FilterWrapper>
          <SearchInputs setSearch={setSearch} style={{ flex: 1 }} />
          <AddBtn onPress={() => navigation.navigate("addUser")} />
        </FilterWrapper>
        {!!data.users.length && (
          <FlatList
            contentContainerStyle={verticalTable.table}
            style={{ marginBottom: 95 }}
            data={[...data.users, { pagination: true }]}
            renderItem={({ item }: any) => (
              <Fragment key={item.id}>
                {!item.pagination ? (
                  <RenderUser item={item} />
                ) : (
                  <Pagination
                    key={item.id}
                    countItems={data.totoalUsers}
                    style={{ marginTop: 25 }}
                    setPage={setPage}
                    take={take}
                    page={page}
                  />
                )}
              </Fragment>
            )}
          />
        )}
      </Container>
      <Menu />
    </View>
  );
}
