import { reportItems } from "../../../utils/select/reportItems";
import FilterWrapper from "../../utils/filter-wrapper";
import { Picker } from "@react-native-picker/picker";
import SearchInputs from "../../utils/search-input";
import DatePicker from "../../utils/datePicker";
import OptionModal from "../../utils/options";
import { useEffect, useState } from "react";
import fetchData from "./fetchData";
import { View } from "react-native";
import { Shadow } from "react-native-shadow-2";
import CustomText from "../../utils/text";

export default function DailyReportFilters({
  setDate,
  setSearch,
  setType,
  setStart,
  setEnd,
  setUnit,
}) {
  const [unitItems, setUnitItems] = useState([]);

  useEffect(() => {
    fetchData(setUnitItems);
  }, []);

  return (
    <FilterWrapper>
      <OptionModal>
        <SearchInputs setSearch={setSearch} />
        {/* <Shadow style={{ width: "100%", borderRadius: 10 }} distance={3}>
          <Picker onValueChange={setType}>
            {reportItems.map(({ label, value }: any) => (
              <Picker.Item key={value} label={label} value={value} />
            ))}
          </Picker>
        </Shadow> */}
        {/* <Shadow style={{ width: "100%", borderRadius: 10 }} distance={3}>
          <Picker onValueChange={setUnit}>
            {unitItems.map(({ label, value }: any) => (
              <Picker.Item key={value} label={label} value={value} />
            ))}
          </Picker>
        </Shadow> */}
        {/* <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: 10,
          }}
        >
          <DatePicker onChange={setEnd} style={{ flex: 1 }} />
          <CustomText>تا</CustomText>
          <DatePicker onChange={setStart} style={{ flex: 1 }} />
          <CustomText>از</CustomText>
        </View> */}
      </OptionModal>
      <DatePicker onChange={setDate} style={{ flex: 1 }} />
    </FilterWrapper>
  );
}
