import MessageDialog from "../../components/utils/message-dialog";
import { View, CustomText, FlatList } from "react-native";
import styles from "./styles";
import globalStyles from "../../globalStyles";

export default function RenderNotifs({ data, title }) {
  return (
    <View>
      {data.length > 0 && (
        <>
          <CustomText style={[styles.heading, globalStyles.h2]}>
            {title}
          </CustomText>
          <FlatList
            data={data}
            renderItem={({ item }) => <MessageDialog item={item} />}
          />
        </>
      )}
    </View>
  );
}
