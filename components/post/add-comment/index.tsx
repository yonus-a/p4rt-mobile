import errorAlert from "../../../utils/alert/error";
import useUserId from "../../../hooks/useUserId";
import { Shadow } from "react-native-shadow-2";
import { useForm } from "react-hook-form";
import Button from "../../utils/button";
import Input from "../../utils/input";
import { View } from "react-native";
import styles from "./styles";
import axios from "axios";

export default function AddComment({ postId, fetchNewComment }) {
  const { control, handleSubmit } = useForm();
  const userId = useUserId();

  const onSubmit = async (data) => {
    try {
      axios.post("/posts/addComment", { message: data.msg, userId, postId });
      fetchNewComment();
    } catch (e) {
      await errorAlert();
    }
  };

  return (
    <View style={styles.addComment}>
      <Shadow
        distance={10}
        style={{ borderRadius: 10, width: "100%" }}
        startColor="#00000015"
      >
        <Input
          multiline
          placeholder="نظر خود را وارد کنید"
          numberOfLines={8}
          control={control}
          name="msg"
        />
      </Shadow>
      <Button onPress={handleSubmit(onSubmit)} title="ارسال" />
    </View>
  );
}
