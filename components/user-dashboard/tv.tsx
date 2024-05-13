import React, { useRef, useEffect } from "react";
import { View, Text, Animated, StyleSheet } from "react-native";

const 
 = ({ text }) => {
  const translateX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(translateX, {
        toValue: 1000, // مقدار مناسب برای حرکت متن
        duration: 5000, // زمان لازم برای عبور کامل متن از صفحه
        useNativeDriver: true,
      })
    ).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={{ transform: [{ translateX }] }}>
        <Text style={styles.subtitle}>{text}</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
    paddingHorizontal: 10,
    alignItems: "flex-start",
  },
  subtitle: {
    color: "#000",
    fontSize: 16,
    width: 2000,
  },
});

export default TVSubtitle;
