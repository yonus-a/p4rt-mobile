import BreadcrumbHeader from "../../../components/overal/breadcrumb-header";
import { View, Image, Modal, Pressable } from "react-native";
import Pagination from "../../../components/utils/pagination";
import { SwipeListView } from "react-native-swipe-list-view";
import Container from "../../../components/overal/container";
import DeleteBtn from "../../../components/utils/delete-btn";
import CloseBtn from "../../../components/utils/close-btn";
import handleDeleteCritics from "./handleDeleteCritics";
import Alert from "../../../components/overal/alert";
import { useEffect, useState } from "react";
import fetchData from "./fetchData";
import styles from "./styles";
import CustomText from "../../../components/utils/text";

export default function ShowCritics({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [critics, setCritics] = useState<any>({});
  const [curPage, setCurPage] = useState(0);
  const take = 20;

  useEffect(() => {
    fetchData(setCritics, curPage, take);
  }, []);

  return (
    <View style={styles.showCritics}>
      <BreadcrumbHeader navigation={navigation} />
      <Container>
        <SwipeListView
          contentContainerStyle={styles.container}
          data={critics.data}
          renderItem={({ item }: any, rowMap) => {
            const name = item.name;

            return (
              <>
                <Pressable
                  style={styles.item}
                  onPress={() => setModalVisible(true)}
                >
                  <CustomText>{name || "ناشناس"}</CustomText>
                  {item.readed ? (
                    <Image
                      source={require("../../../assets/icons/readed.png")}
                      width={50}
                      height={50}
                      style={styles.icon}
                    />
                  ) : (
                    <Image
                      source={require("../../../assets/icons/unread.png")}
                      style={styles.icon}
                      width={50}
                      height={50}
                    />
                  )}
                </Pressable>
                <Modal visible={modalVisible}>
                  <Container style={styles.content}>
                    <CloseBtn onPress={() => setModalVisible(false)} />
                    <CustomText>{item.msg}</CustomText>
                  </Container>
                </Modal>
              </>
            );
          }}
          renderHiddenItem={({ item }: any, rowMap) => (
            <View style={styles.hiddenItem}>
              <DeleteBtn
                onPress={async () =>
                  await handleDeleteCritics(item.id, setCritics, critics)
                }
              />
            </View>
          )}
          leftOpenValue={75}
        />
        <Pagination
          curPage={curPage}
          setCurPage={setCurPage}
          maxPage={Math.round(1)}
        />
      </Container>
      <Alert />
    </View>
  );
}
