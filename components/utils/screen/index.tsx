import drawerStyle from "../../../styles/drawer";
import { Drawer } from "../../../routes";
import { Image } from "react-native";

interface Props {
  component: any;
  name: string;
  title: string;
  icon: any;
}

export default function Screen({ component, name, title, icon }: Props) {
  return (
    <Drawer.Screen
      component={component}
      name={name}
      options={{
        title,
        drawerIcon: () => <Image source={icon} style={drawerStyle.icon} />,
      }}
    />
  );
}
