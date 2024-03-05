import errorAlert from "../../../utils/alert/error";
import useUserId from "../../../hooks/useUserId";
import { useForm } from "react-hook-form";
import Button from "../../utils/button";
import Input from "../../utils/input";
import { View } from "react-native";
import styles from "./styles";
import axios from "axios";

export default function AddComment() {
  const { control, handleSubmit } = useForm();
  const userId = useUserId();

  const onSubmit = async (data) => {
    try {
      axios.post("/posts/addComment", { message: data.msg, userId });
    } catch (e) {
      await errorAlert();
    }
  };

  return (
    <View style={styles.addComment}>
      <Input
        multiline
        numberOfLines={8}
        control={control}
        name="msg"
        placeholder="نظر خود را وارد کنید"
      />
      <Button onPress={handleSubmit(onSubmit)} title="ارسال" />
    </View>
  );
}
