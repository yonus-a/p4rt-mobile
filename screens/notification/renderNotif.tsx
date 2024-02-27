import MessageDialog from "../../components/utils/message-dialog";
import { View, Text, FlatList } from "react-native";
import styles from "./styles";
import globalStyles from "../../globalStyles";

export default function RenderNotifs({ data, title }) {
  return (
    <View>
      {data.length > 0 && (
        <>
          <Text style={[styles.heading, globalStyles.h2]}>{title}</Text>
          <FlatList
            data={data}
            renderItem={({ item }) => <MessageDialog item={item} />}
          />
        </>
      )}
    </View>
  );
}
