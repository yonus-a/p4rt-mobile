import Container from "../../components/overal/container";
import { ScrollView, View, Text } from "react-native";
import Button from "../../components/utils/button";
import Input from "../../components/utils/input";
import { useForm } from "react-hook-form";
import styles from "./styles";

export default function AddCritics() {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {};

  return (
    <ScrollView style={styles.addCritics}>
      <Container>
        <View style={styles.wrapper}>
          <Input control={control} name="msg" multiline />
          <Text>
            درصورتی که نام خود را وارد نکنید پیام شما به صورت ناشناس ارسال خواهد
            شد
          </Text>
          <Button onPress={handleSubmit(onSubmit)} title="ثبت" />
        </View>
      </Container>
    </ScrollView>
  );
}
