import UncontroledSelect from "../../utils/uncontroled-select";
import FilterWrapper from "../../utils/filter-wrapper";
import SearchInputs from "../../utils/search-input";
import DatePicker from "../../utils/datePicker";
import OptionModal from "../../utils/options";
import { useEffect, useState } from "react";
import CustomText from "../../utils/text";
import fetchData from "./fetchData";
import { View } from "react-native";

const typeOption = [
  {
    label: "off",
    value: "off",
  },
  {
    label: "تعلیق",
    value: "تعلیق",
  },
  {
    label: "مرخصی",
    value: "مرخصی",
  },
];

export default function DailyReportFilters({
  setDate,
  setSearch,
  setType,
  setUnitId,
  type,
  unit,
  setDate1,
  setDate2,
}) {
  const [units, setUnit] = useState([]);

  useEffect(() => {
    fetchData(setUnit);
  }, [units]);

  const unitOptions = units.map(({ name }) => ({
    label: name,
    value: name,
  }));

  return (
    <FilterWrapper>
      <OptionModal>
        <SearchInputs setSearch={setSearch} />
        <UncontroledSelect
          items={typeOption}
          onChange={(data) => setType(data)}
          defualtValue={type}
        />
        <UncontroledSelect
          items={unitOptions}
          onChange={(data) => setUnitId(data)}
          defualtValue={unit}
        />
        <View style={{ flexDirection: "row", gap: 8, alignItems: "center" }}>
          <DatePicker
            onChange={(date) => {
              setDate(null);
              setDate1(date);
            }}
            style={{ flex: 1 }}
          />
          <CustomText>تا</CustomText>
          <DatePicker
            onChange={(date) => {
              setDate(null);
              setDate2(date);
            }}
            style={{ flex: 1 }}
          />
        </View>
      </OptionModal>
      <DatePicker onChange={setDate} style={{ flex: 1 }} />
    </FilterWrapper>
  );
}
