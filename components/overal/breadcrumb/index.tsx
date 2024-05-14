import { RouteDictionary } from "../../../utils/router/route-dictionary";
import { useRoute } from "@react-navigation/native";
import CustomText from "../../utils/text";
import styles from "./styles";

export default function Breadcrumb() {
  const route = useRoute();

  return (
    <CustomText style={styles.text}>{RouteDictionary[route.name]}</CustomText>
  );
}
