import RenderOffersItem from "../../../components/offers/render-offers-item";
import BreadcrumbHeader from "../../../components/overal/breadcrumb-header";
import DeleteHiddenBtn from "../../../components/utils/delete-hidden-btn";
import QuickPanel from "../../../components/overal/quick-panel";
import Pagination from "../../../components/utils/pagination";
import Container from "../../../components/overal/container";
import { SwipeListView } from "react-native-swipe-list-view";
import CustomText from "../../../components/utils/text";
import handleDeleteOffers from "./handleDeleteOffers";
import globalStyles from "../../../globalStyles";
import { useEffect, useState } from "react";
import fetchData from "./fetchData";
import { View } from "react-native";
import styles from "./styles";

export default function ShowOffers() {
  const take = 20;
  const [page, setPage] = useState(0);
  const [offers, setoffers] = useState<any>({
    data: [],
  });

  useEffect(() => {
    fetchData(setoffers, page, take);
  }, []);

  return (
    <View style={styles.showOffers}>
      <BreadcrumbHeader />
      <Container>
        {!!offers.data.length ? (
          <SwipeListView
            leftOpenValue={75}
            contentContainerStyle={styles.container}
            data={[...offers.data, { pagination: true }]}
            renderItem={({ item }) => {
              return (
                <>
                  {!item.pagination ? (
                    <RenderOffersItem item={item} key={item.id} />
                  ) : (
                    <Pagination
                      page={page}
                      setPage={setPage}
                      style={{ marginTop: 10 }}
                      key={item.id}
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
                    await handleDeleteOffers(item.id, setoffers, offers)
                  }
                />
              );
            }}
          />
        ) : (
          <CustomText style={globalStyles.h1}>
            صفحه پیشنهادات خالی است
          </CustomText>
        )}
      </Container>
      <QuickPanel />
    </View>
  );
}
