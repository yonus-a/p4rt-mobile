import fetchData from "../../../screens/render-posts/fetchData";
import ShowSearchedPosts from "../../post/show-searched-posts";
import { CLR_BACKDROP } from "../../../styles/globalStyles";
import PressableIcon from "../../utils/pressable-icon";
import SearchInput from "../../utils/search-input";
import CloseBtn from "../../utils/close-btn";
import { useEffect, useState } from "react";
import Modal from "react-native-modal";
import Container from "../container";
import { View } from "react-native";
import styles from "./styles";

export default function Search() {
  const [visible, setVisible] = useState(false);
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const take = 10;

  useEffect(() => {
    if (search) {
      fetchData(setData, {
        page: 1,
        search,
        take,
      });
    }
  }, [search]);

  const handlePress = () => {
    setData([]);
    setVisible(!visible);
  };

  return (
    <View style={styles.search}>
      <PressableIcon
        srouce={require("../../../assets/icons/search.png")}
        iconStyle={styles.icon}
        onPress={handlePress}
        alt="search"
      />
      <Modal
        onBackdropPress={handlePress}
        animationOut={"slideOutRight"}
        backdropColor={CLR_BACKDROP}
        animationIn={"slideInRight"}
        style={styles.modal}
        isVisible={visible}
      >
        <Container>
          <CloseBtn onPress={handlePress} style={styles.closeBtn} />
          <SearchInput setSearch={setSearch} />
          <ShowSearchedPosts data={data} />
        </Container>
      </Modal>
    </View>
  );
}
