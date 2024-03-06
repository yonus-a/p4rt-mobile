import MessageDialog from "../../components/utils/message-dialog";
import CustomText from "../../components/utils/text";
import globalStyles from "../../globalStyles";
import { View, FlatList } from "react-native";
import styles from "./styles";

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
            renderItem={({ item }) => (
              <View style={{ flex: 1, padding: 5 }}>
                <MessageDialog item={item} />
              </View>
            )}
          />
        </>
      )}
    </View>
  );
}
