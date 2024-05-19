import Pagination from "../../utils/pagination";
import { useEffect, useState } from "react";
import CustomText from "../../utils/text";
import fetchData from "./fetchData";
import { View } from "react-native";
import styles from "./styles";

export default function ShowCiriticsAnswers() {
  const take = 10;
  const [page, setPage] = useState(0);
  const [answers, setAnswers] = useState({
    totalMessages: 0,
    messages: [],
  });

  useEffect(() => {
    fetchData(setAnswers, page, take);
  }, []);

  if (!answers.messages.length) return null;

  return (
    <View style={styles.wrapper}>
      {answers.messages.map(({ id, msg, cirtics }) => {
        return (
          <View key={id} style={styles.item}>
            <CustomText style={styles.sender}>
              ارسال شده توسط {cirtics.name || "ناشناس"}
            </CustomText>

            <CustomText>{cirtics.msg}</CustomText>
            <View style={styles.seperator}></View>
            <CustomText>{msg}</CustomText>
          </View>
        );
      })}
      <Pagination
        countItems={answers.totalMessages}
        setPage={setPage}
        page={page}
        take={take}
      />
    </View>
  );
}
