import { Button } from "react-native";

interface Props {
  navigation: any;
  title: string;
  to: string;
}

export default function Navigate({ navigation, to, title }: Props) {
  return (
    <Button title={title} onPress={() => navigation.navigate(to)}></Button>
  );
}
