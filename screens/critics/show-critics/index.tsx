import RenderCriticsItem from "../../../components/critics/render-critics-item";
import DeleteHiddenBtn from "../../../components/utils/delete-hidden-btn";
import Pagination from "../../../components/utils/pagination";
import Container from "../../../components/overal/container";
import { SwipeListView } from "react-native-swipe-list-view";
import CustomText from "../../../components/utils/text";
import handleDeleteCritics from "./handleDeleteCritics";
import globalStyles from "../../../styles/globalStyles";
import Menu from "../../../components/overal/quick-panel";
import Header from "../../../components/overal/header";
import { Fragment, useEffect, useState } from "react";
import fetchData from "./fetchData";
import { View } from "react-native";
import styles from "./styles";

export default function ShowCritics() {
  const take = 20;
  const [page, setPage] = useState(0);
  const [critics, setCritics] = useState<any>({
    count: 0,
    data: [],
  });

  useEffect(() => {
    fetchData(setCritics, page, take);
  }, []);

  return (
    <View style={styles.showCritics}>
      <Header />
      <Container>
        {!!critics.data.length ? (
          <SwipeListView
            leftOpenValue={75}
            style={styles.wrapper}
            contentContainerStyle={styles.container}
            data={[...critics.data, { pagination: true }]}
            renderItem={({ item }) => {
              return (
                <Fragment key={item.id}>
                  {!item.pagination ? (
                    <RenderCriticsItem item={item} />
                  ) : (
                    <Pagination
                      countItems={critics.count}
                      style={{ marginTop: 20 }}
                      setPage={setPage}
                      page={page}
                      take={take}
                    />
                  )}
                </Fragment>
              );
            }}
            renderHiddenItem={({ item }: any) => {
              if (item.pagination) return null;

              return (
                <DeleteHiddenBtn
                  key={item.id}
                  onPress={async () =>
                    await handleDeleteCritics(item.id, setCritics, critics)
                  }
                />
              );
            }}
          />
        ) : (
          <CustomText style={globalStyles.h1}>صفحه گزارشات خالی است</CustomText>
        )}
      </Container>
      <Menu />
    </View>
  );
}
