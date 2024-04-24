import PrimaryButton from "../../components/utils/primary-button";
import Container from "../../components/overal/container";
import CustomText from "../../components/utils/text";
import { Linking, Image, View } from "react-native";
import styles from "./styles";

export default function Update() {
  const handleDownload = async () => {
    const fileUrl = "https://p4rt.ir/public/p4rt.apk";
    Linking.openURL(fileUrl).catch((err) =>
      console.error("Couldn't load page", err)
    );
  };

  return (
    <Container style={styles.wrapper}>
      <View style={styles.box}>
        <Image
          style={styles.image}
          source={require("../../assets/images/overal/logo.png")}
        />
        <CustomText style={styles.text}>
          لطفا آخرین نسخه اپلیکیشن را دانلود کرده و آن را نصب نمایید
        </CustomText>
        <PrimaryButton
          onPress={handleDownload}
          title="دانلود آخرین نسخه اپلیکیشن"
        />
      </View>
    </Container>
  );
}
