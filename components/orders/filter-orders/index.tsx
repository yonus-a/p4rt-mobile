import FilterWrapper from "../../utils/filter-wrapper";
import SearchInputs from "../../utils/search-input";
import DatePicker from "../../../utils/datePicker";
import OptionModal from "../../utils/options";

export default function FitlerOrders({ setDate }) {
  return (
    <FilterWrapper>
      <OptionModal>
        <SearchInputs setSearch={setDate} />
      </OptionModal>
      <DatePicker onChange={setDate} style={{ flex: 1 }} />
    </FilterWrapper>
  );
}
