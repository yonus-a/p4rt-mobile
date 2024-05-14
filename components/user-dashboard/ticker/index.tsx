import fetchFullDate from "../../../fetch/fetchFullDate";
import fetchOwghat from "../../../fetch/fetchOwghat";
import TextTicker from "react-native-text-ticker";
import { useEffect, useState } from "react";
import { Easing } from "react-native";
import { View } from "react-native";
import styles from "./styles";

export default function Ticker() {
  const [owghat, setOwghat] = useState<any>({});
  const [date, setDate] = useState<any>({});

  useEffect(() => {
    fetchFullDate(setDate);
    fetchOwghat(setOwghat);
  }, []);

  return (
    <View style={styles.ticker}>
      <TextTicker
        style={styles.tickerText}
        easing={Easing.linear}
        repeatSpacer={10}
        duration={25000}
        marqueeDelay={1000}
        bounce
        loop
      >
        {date.date?.weekday?.name} {date.date?.day?.name}{" "}
        {date.date?.month?.name} {date.date?.year?.number?.fa}
        {" - "}
        ساعت {date.time24?.full?.fa} {" - "}
        {date.date?.day?.events?.local?.text}
        {" - "}
        اذان صبح به افق کرمان {owghat.result?.azan_sobh}
        {" - "}
        طلوع آفتاب {owghat.result?.tolu_aftab}
        {" - "}
        اذان ظهر به افق کرمان {owghat.result?.azan_zohr}
        {" - "}
        غروب آفتاب {owghat.result?.ghorub_aftab}
        {" - "}
        اذان مغرب به افق کرمان {owghat.result?.azan_maghreb}
        {" - "}
        نیمه شب شرعی {owghat.result?.nimeshab}
        {" - "}
      </TextTicker>
    </View>
  );
}
