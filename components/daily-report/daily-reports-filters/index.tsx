import FilterWrapper from "../../utils/filter-wrapper";
import SearchInputs from "../../utils/search-input";
import DatePicker from "../../../utils/datePicker";
import OptionModal from "../../utils/options";

export default function DailyReportFilters({ setDate, setSearch }) {
  return (
    <FilterWrapper>
      <OptionModal>
        <SearchInputs setSearch={setSearch} />
      </OptionModal>
      <DatePicker onChange={setDate} style={{ flex: 1 }} />
    </FilterWrapper>
  );
}
