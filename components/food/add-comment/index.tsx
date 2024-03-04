import { useForm } from "react-hook-form";
import Button from "../../utils/button";
import Input from "../../utils/input";
import { View } from "react-native";
import styles from "./styles";

export default function AddComment() {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    try {
    } catch (e) {}
  };

  return (
    <View style={styles.addComment}>
      <Input multiline numberOfLines={5} control={control} name="msg" />
      <Button onPress={handleSubmit(onSubmit)} title="ارسال" />
    </View>
  );
}
