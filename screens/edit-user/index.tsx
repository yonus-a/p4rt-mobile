import BreadcrumbHeader from "../../components/overal/breadcrumb";
import PrimaryButton from "../../components/utils/primary-button";
import AddUserForm from "../../components/user/user-form";
import Container from "../../components/overal/container";
import handleEditUser from "./handleEditUser";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ScrollView } from "react-native";
import fetchData from "./fetchData";
import { View } from "react-native";
import styles from "./styles";

export default function EditUser({ route }) {
  const { control, handleSubmit, setValue, reset } = useForm();
  const [positions, setPositions] = useState([]);
  const [units, setUnits] = useState([]);
  const { id } = route.params;

  useEffect(() => {
    fetchData({ id, setValue, setUnits, setPositions });
  }, []);

  return (
    <View style={styles.addUser}>
      <BreadcrumbHeader />
      <ScrollView>
        <Container>
          <AddUserForm
            positions={positions}
            setValue={setValue}
            control={control}
            units={units}
          />
          <PrimaryButton
            onPress={handleSubmit((data) => handleEditUser(id, data))}
            title="ثبت"
          />
        </Container>
      </ScrollView>
    </View>
  );
}
