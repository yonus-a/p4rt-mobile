import BreadcrumbHeader from "../../components/overal/breadcrumb";
import RenderCartItems from "../../components/food/render-cart-items";
import QuickPanel from "../../components/overal/quick-panel";
import Container from "../../components/overal/container";
import CustomText from "../../components/utils/text";
import Bill from "../../components/food/bill";
import { View } from "react-native";
import styles from "./styles";

export default function Cart() {
  return (
    <View style={styles.cart}>
      <BreadcrumbHeader />
      <QuickPanel />
    </View>
  );
}
