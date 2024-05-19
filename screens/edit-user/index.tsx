import PrimaryButton from "../../components/utils/primary-button";
import AddUserForm from "../../components/user/user-form";
import Container from "../../components/overal/container";
import Header from "../../components/overal/header";
import Menu from "../../components/overal/quick-panel";
import handleEditUser from "./handleEditUser";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ScrollView } from "react-native";
import fetchData from "./fetchData";
import { View } from "react-native";
import styles from "./styles";

export default function EditUser({ route }) {
  const { control, handleSubmit, setValue } = useForm();
  const [positions, setPositions] = useState([]);
  const [units, setUnits] = useState([]);
  const { id } = route.params;

  useEffect(() => {
    fetchData({ id, setValue, setUnits, setPositions });
  }, []);

  return (
    <View style={styles.addUser}>
      <Header />
      <ScrollView style={styles.wrapper}>
        <Container>
          <AddUserForm
            positions={positions}
            setValue={setValue}
            control={control}
            units={units}
          />
          <PrimaryButton
            onPress={handleSubmit((data) => handleEditUser(id, data))}
            style={styles.submit}
            title="ثبت"
          />
        </Container>
      </ScrollView>
      <Menu />
    </View>
  );
}
