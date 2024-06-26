import SecondaryButton from "../../utils/secondary-button";
import FilterWrapper from "../../utils/filter-wrapper";
import SearchInputs from "../../utils/search-input";
import handleConfirmAll from "./handleConfirmAll";
import DatePicker from "../../utils/datePicker";
import OptionModal from "../../utils/options";
import { View } from "react-native";
import styles from "./styles";

export default function FitlerOrders({
  setDate,
  setSearch,
  date,
  fetchNewData,
}) {
  return (
    <FilterWrapper>
      <DatePicker onChange={setDate} containerStyle={{ flex: 1 }} />
      <OptionModal>
        <SearchInputs setSearch={setSearch} />
        <View style={styles.btns}>
          <SecondaryButton
            onPress={() => handleConfirmAll(date, fetchNewData)}
            title="تایید همه"
          />
        </View>
      </OptionModal>
    </FilterWrapper>
  );
}
