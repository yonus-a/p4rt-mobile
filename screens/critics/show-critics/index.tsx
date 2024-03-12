import DeleteHiddenBtn from "../../../components/utils/delete-hidden-btn";
import RenderCriticsItem from "../../../components/critics/render-critics-item";
import BreadcrumbHeader from "../../../components/overal/breadcrumb-header";
import QuickPanel from "../../../components/overal/quick-panel";
import { SwipeListView } from "react-native-swipe-list-view";
import handleDeleteCritics from "./handleDeleteCritics";
import Container from "../../../components/overal/container";
import Pagination from "../../../components/utils/pagination";
import { useEffect, useState } from "react";
import fetchData from "./fetchData";
import { View } from "react-native";
import styles from "./styles";

export default function ShowCritics() {
  const take = 20;
  const [curPage, setCurPage] = useState(0);
  const [critics, setCritics] = useState<any>({
    data: [],
  });

  useEffect(() => {
    fetchData(setCritics, curPage, take);

    return () => {
      setCritics([]);
    };
  }, []);

  return (
    <View style={styles.showCritics}>
      <BreadcrumbHeader />
      <Container>
        <SwipeListView
          contentContainerStyle={styles.container}
          leftOpenValue={75}
          data={[...critics.data, { pagination: true }]}
          renderItem={({ item }) => {
            return (
              <>
                {!item.pagination ? (
                  <RenderCriticsItem item={item} />
                ) : (
                  <Pagination
                    curPage={curPage}
                    setCurPage={setCurPage}
                    style={{ marginTop: 10 }}
                    maxPage={10}
                  />
                )}
              </>
            );
          }}
          renderHiddenItem={({ item }: any) => {
            if (item.pagination) return null;

            return (
              <DeleteHiddenBtn
                onPress={async () =>
                  await handleDeleteCritics(item.id, setCritics, critics)
                }
              />
            );
          }}
        />
      </Container>
      <QuickPanel />
    </View>
  );
}
