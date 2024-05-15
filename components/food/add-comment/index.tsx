import { useNavigation } from "@react-navigation/native";
import PrimaryButton from "../../utils/primary-button";
import errorAlert from "../../../utils/alert/error";
import { useForm } from "react-hook-form";
import Input from "../../utils/input";
import addComment from "./addComment";
import { View } from "react-native";
import styles from "./styles";

export default function AddComment({ foodId, onSubmited }) {
  const { control, handleSubmit } = useForm();
  const navigation: any = useNavigation();

  const onSubmit = async ({ text }) => {
    try {
      await addComment({
        text,
        foodId,
      });

      onSubmited();
      navigation.setParams({ updater: {} });
    } catch (e) {
      await errorAlert();
    }
  };

  return (
    <View style={styles.addComment}>
      <Input
        multiline
        numberOfLines={5}
        control={control}
        name="text"
        placeholder="نظر خود را وارد کنید..."
      />
      <PrimaryButton onPress={handleSubmit(onSubmit)} title="ارسال" />
    </View>
  );
}
