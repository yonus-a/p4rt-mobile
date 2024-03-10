import { useNavigation } from "@react-navigation/native";
import FilterWrapper from "../filter-wrapper";
import { useEffect, useState } from "react";
import ShowUserItem from "./show-user-item";
import SearchInputs from "../search-input";
import { FlatList } from "react-native";
import OptionModal from "../options";
import { View } from "react-native";
import fetchData from "./fetchData";
import CustomText from "../text";

export default function SearchUsers({ selectedUser, setSelectedUser }) {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState();

  useEffect(() => {
    fetchData({ setUsers, search });
  }, [search]);

  const handleDelete = (id) => {
    setSelectedUser(selectedUser.filter((item) => item.id !== id));
  };

  const handleAdd = (item) => {
    if (!selectedUser.includes(item)) {
      setSelectedUser([...selectedUser, item]);
    }
  };

  return (
    <View style={{ gap: 30 }}>
      <FilterWrapper>
        <OptionModal>
          <CustomText>search</CustomText>
        </OptionModal>
        <SearchInputs setSearch={setSearch} style={{ flex: 1 }} />
      </FilterWrapper>
      <FlatList
        data={users}
        style={{ height: "10%" }}
        contentContainerStyle={{ gap: 10 }}
        renderItem={({ item }) => (
          <ShowUserItem item={item} onPress={() => handleAdd(item)} />
        )}
      />
      <View style={{ height: "30%" }}>
        <CustomText style={{ marginBottom: 15 }}>موارد انتخاب شده</CustomText>
        <FlatList
          data={selectedUser}
          contentContainerStyle={{ gap: 10 }}
          renderItem={({ item }) => {
            console.log(item);
            return (
              <ShowUserItem item={item} onPress={() => handleDelete(item.id)} />
            );
          }}
        />
      </View>
    </View>
  );
}