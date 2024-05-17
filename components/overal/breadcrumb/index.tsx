import { RouteDictionary } from "../../../utils/router/route-dictionary";
import { PostCategories } from "../../../utils/router/post-categories";
import { useRoute } from "@react-navigation/native";
import CustomText from "../../utils/text";
import styles from "./styles";

export default function Breadcrumb() {
  const route: any = useRoute();

  return (
    <CustomText style={styles.text}>
      {route.name !== "renderPosts"
        ? RouteDictionary[route.name]
        : PostCategories[route.params?.category]}
    </CustomText>
  );
}
