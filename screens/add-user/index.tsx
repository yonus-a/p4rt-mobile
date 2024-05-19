import PrimaryButton from "../../components/utils/primary-button";
import AddUserForm from "../../components/user/user-form";
import Container from "../../components/overal/container";
import Header from "../../components/overal/header";
import Menu from "../../components/overal/quick-panel";
import { useEffect, useState } from "react";
import handleAddUser from "./handleAddUser";
import { useForm } from "react-hook-form";
import { ScrollView } from "react-native";
import fetchData from "./fetchData";
import { View } from "react-native";
import styles from "./styles";

export default function AddUser() {
  const { control, handleSubmit, setValue } = useForm();
  const [positions, setPositions] = useState([]);
  const [units, setUnits] = useState([]);

  useEffect(() => {
    fetchData(setUnits, setPositions);
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
            style={styles.submit}
            onPress={handleSubmit(handleAddUser)}
            title="ثبت"
          />
        </Container>
      </ScrollView>
      <Menu />
    </View>
  );
}
