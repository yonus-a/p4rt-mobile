import BreadcrumbHeader from "../../components/overal/breadcrumb-header";
import AbsenteeFilters from "../../components/absentee/filter-absentee";
import RenderAbsentee from "../../components/absentee/render-absentee";
import Container from "../../components/overal/container";
import { useEffect, useState } from "react";
import { View } from "react-native";
import fetchData from "./fetchData";
import styles from "./styles";

export default function Absentee() {
  const [date, setDate] = useState(new Date());
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData({
      setData,
      search,
      date,
    });
  }, [date, search]);

  return (
    <View style={styles.absentee}>
      <BreadcrumbHeader />
      <Container>
        <AbsenteeFilters setDate={setDate} setSearch={setSearch} />
        <RenderAbsentee data={data} />
      </Container>
    </View>
  );
}
