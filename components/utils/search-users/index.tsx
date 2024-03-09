import { FlatList } from "react-native";
import FilterWrapper from "../filter-wrapper";
import { useEffect, useState } from "react";
import SearchInputs from "../search-input";
import ShowUserItem from "./show-user-item";
import OptionModal from "../options";
import { View } from "react-native";
import fetchData from "./fetchData";
import CustomText from "../text";

export default function SearchUsers() {
  const [selectedUser, setSelectedUser] = useState([]);
  const [search, setSearch] = useState();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchData({ setUsers, search });
  }, [search]);

  return (
    <View>
      <FilterWrapper>
        <OptionModal>
          <CustomText>search</CustomText>
        </OptionModal>
        <SearchInputs setSearch={setSearch} />
      </FilterWrapper>
      <FlatList
        data={users}
        style={{ flex: 1 }}
        renderItem={({ item }) => (
          <ShowUserItem
            item={item}
            addUser={(item) => {
              setUsers([...selectedUser, item]);
            }}
          />
        )}
      />
      <View style={{ flex: 1.5 }}>
        <CustomText>موارد انتخاب شده</CustomText>
        <FlatList
          data={selectedUser}
          renderItem={({ item }) => (
            <ShowUserItem
              item={item}
              addUser={(item) => {
                setSelectedUser([...selectedUser, item]);
              }}
            />
          )}
        />
      </View>
    </View>
  );
}
