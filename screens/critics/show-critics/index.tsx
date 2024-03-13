import RenderCriticsItem from "../../../components/critics/render-critics-item";
import BreadcrumbHeader from "../../../components/overal/breadcrumb-header";
import DeleteHiddenBtn from "../../../components/utils/delete-hidden-btn";
import QuickPanel from "../../../components/overal/quick-panel";
import Pagination from "../../../components/utils/pagination";
import Container from "../../../components/overal/container";
import { SwipeListView } from "react-native-swipe-list-view";
import CustomText from "../../../components/utils/text";
import handleDeleteCritics from "./handleDeleteCritics";
import globalStyles from "../../../globalStyles";
import { useEffect, useState } from "react";
import fetchData from "./fetchData";
import { View } from "react-native";
import styles from "./styles";

export default function ShowCritics() {
  const take = 20;
  const [page, setPage] = useState(0);
  const [critics, setCritics] = useState<any>({
    data: [],
  });

  useEffect(() => {
    fetchData(setCritics, page, take);

    return () => {
      setCritics([]);
    };
  }, []);

  return (
    <View style={styles.showCritics}>
      <BreadcrumbHeader />
      <Container>
        {!!critics.data.length ? (
          <SwipeListView
            leftOpenValue={75}
            contentContainerStyle={styles.container}
            data={[...critics.data, { pagination: true }]}
            renderItem={({ item }) => {
              return (
                <>
                  {!item.pagination ? (
                    <RenderCriticsItem item={item} />
                  ) : (
                    <Pagination
                      page={page}
                      setPage={setPage}
                      style={{ marginTop: 10 }}
                      countItems={10}
                      take={take}
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
        ) : (
          <CustomText style={globalStyles.h1}>
            صفحه انتقادات خالی است
          </CustomText>
        )}
      </Container>
      <QuickPanel />
    </View>
  );
}
