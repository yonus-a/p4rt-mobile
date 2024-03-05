import BreadcrumbHeader from "../../components/overal/breadcrumb-header";
import RenderCartItems from "../../components/food/render-cart-items";
import Container from "../../components/overal/container";
import CustomText from "../../components/utils/text";
import Bill from "../../components/food/bill";
import useCart from "../../hooks/useCart";
import { View } from "react-native";
import styles from "./styles";
import QuickPanel from "../../components/overal/quick-panel";

export default function Cart({ navigation }) {
  const { items } = useCart();

  return (
    <View style={styles.cart}>
      <BreadcrumbHeader navigation={navigation} />
      <Container>
        {items.length ? (
          <View style={styles.wrapper}>
            <RenderCartItems items={items} />
            <Bill items={items} />
          </View>
        ) : (
          <CustomText style={styles.empty}>شما هیچ سفارشی ندارید !</CustomText>
        )}
      </Container>
      <QuickPanel />
    </View>
  );
}
