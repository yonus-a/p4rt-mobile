import errorAlert from "../../../utils/alert/error";
import { useForm } from "react-hook-form";
import Button from "../../utils/button";
import Input from "../../utils/input";
import addComment from "./addComment";
import { View } from "react-native";
import styles from "./styles";

export default function AddComment({ foodId, fetchNewData, closeDialog }) {
  const { control, handleSubmit } = useForm();

  const onSubmit = async ({ text }) => {
    try {
      await addComment({
        text,
        foodId,
      });
      fetchNewData();
      closeDialog();
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
      <Button onPress={handleSubmit(onSubmit)} title="ارسال" />
    </View>
  );
}
