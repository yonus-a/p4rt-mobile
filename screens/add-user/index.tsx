import BreadcrumbHeader from "../../components/overal/breadcrumb-header";
import PrimaryButton from "../../components/utils/primary-button";
import AddUserForm from "../../components/user/user-form";
import Container from "../../components/overal/container";
import { useFocusEffect } from "@react-navigation/native";
import { useEffect, useState } from "react";
import handleAddUser from "./handleAddUser";
import { useForm } from "react-hook-form";
import { ScrollView } from "react-native";
import fetchData from "./fetchData";
import { View } from "react-native";
import styles from "./styles";

export default function AddUser() {
  const { control, handleSubmit, setValue, reset } = useForm();
  const [positions, setPositions] = useState([]);
  const [units, setUnits] = useState([]);

  useEffect(() => {
    fetchData(setUnits, setPositions);
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
          <PrimaryButton onPress={handleSubmit(handleAddUser)} title="ثبت" />
        </Container>
      </ScrollView>
    </View>
  );
}
