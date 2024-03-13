import SecondaryButton from "../../utils/secondary-button";
import FilterWrapper from "../../utils/filter-wrapper";
import SearchInputs from "../../utils/search-input";
import handleConfirmAll from "./handleConfirmAll";
import DatePicker from "../../utils/datePicker";
import OptionModal from "../../utils/options";
import { View } from "react-native";
import styles from "./styles";

export default function FitlerOrders({ setDate, setSearch, date }) {
  return (
    <FilterWrapper>
      <OptionModal>
        <SearchInputs setSearch={setSearch} />
        <View style={styles.btns}>
          <SecondaryButton
            onPress={() => handleConfirmAll(date)}
            title="تایید همه"
          />
        </View>
      </OptionModal>
      <DatePicker onChange={setDate} style={{ flex: 1 }} />
    </FilterWrapper>
  );
}
