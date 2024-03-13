import { educationItems } from "../../../utils/select/educationItems";
import optionsGenerator from "../../../utils/select/optionsGenerator";
import ControledDatePicker from "../../utils/controled-datePicker";
import FilePicker from "../../utils/filePicker";
import Select from "../../utils/select";
import Input from "../../utils/input";
import { View } from "react-native";

export default function AddUserForm({ positions, setValue, control, units }) {
  const positionOptions = optionsGenerator(positions);
  const unitOptions = optionsGenerator(units);

  return (
    <View style={{ gap: 15 }}>
      <Input control={control} name="user.firstname" placeholder="نام" />
      <Input
        control={control}
        name="user.lastname"
        placeholder="نام خانوادگی"
      />
      <ControledDatePicker control={control} name="user.birthday" />
      <Input control={control} name="user.phone" placeholder="شماره تماس" />
      <Input control={control} name="user.id" placeholder="کد ملی" />
      <FilePicker setValue={setValue} name="photo" />
      <Select
        items={unitOptions}
        placeholder="واحد"
        control={control}
        name="user.unitId"
      />
      <Select
        items={positionOptions}
        placeholder="جایگاه"
        control={control}
        name="user.positionId"
      />
      <Select
        items={educationItems}
        placeholder="موقعیت"
        control={control}
        name="user.education"
      />
      <Input control={control} name="major" placeholder="تحصیلات" />
    </View>
  );
}
