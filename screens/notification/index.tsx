import BreadcrumbHeader from "../../components/overal/breadcrumb";
import QuickPanel from "../../components/overal/quick-panel";
import Container from "../../components/overal/container";
import { useEffect, useState } from "react";
import RenderNotifs from "./renderNotif";
import fetchData from "./fetchData";
import { View } from "react-native";
import styles from "./styles";

export default function Notification() {
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
      <BreadcrumbHeader />
      <Container>
        <RenderNotifs data={privateNotifs} title={"اعلان خصوصی"} />
        <RenderNotifs data={publicNotifs} title={"اعلان عمومی"} />
      </Container>
      <QuickPanel />
    </View>
  );
}
