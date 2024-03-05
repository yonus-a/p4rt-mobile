import BreadcrumbHeader from "../../components/overal/breadcrumb-header";
import Container from "../../components/overal/container";
import { useEffect, useState } from "react";
import RenderNotifs from "./renderNotif";
import fetchData from "./fetchData";
import { View } from "react-native";
import styles from "./styles";
import QuickPanel from "../../components/overal/quick-panel";

export default function Notification({ navigation }) {
  const [privateNotifs, setPrivateNotifs] = useState([]);
  const [publicNotifs, setPublicNotifs] = useState([]);
  const [privatePage, setPrivatePage] = useState(0);
  const [publicPage, setPublicPage] = useState(0);

  useEffect(() => {
    fetchData({
      setPrivateNotifs,
      privateTake: 10,
      setPublicNotifs,
      publicTake: 10,
      privatePage,
      publicPage,
    });
  }, []);

  return (
    <View style={styles.notification}>
      <BreadcrumbHeader navigation={navigation} />
      <Container>
        <RenderNotifs data={privateNotifs} title={"اعلان خصوصی"} />
        <RenderNotifs data={publicNotifs} title={"اعلان عمومی"} />
      </Container>
      <QuickPanel />
    </View>
  );
}
