import { View, Button, Alert } from "react-native";
import { useForm } from "react-hook-form";
import Input from "../../components/input";
import styles from "./styles";

export default function Signin() {
  const { control, handleSubmit } = useForm();

  const onSubmit = () => {
    Alert.alert("hello word");
  };

  return (
    <View style={styles.signin}>
      <View style={styles.container}>
        <Input control={control} name="کد ملی" />
        <Button title="ورود" onPress={handleSubmit(onSubmit)} />
      </View>
    </View>
  );
}
