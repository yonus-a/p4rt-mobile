import { useRef, useState } from "react";
import { Animated } from "react-native";

export default function useExpanded() {
  const width = useRef(new Animated.Value(52)).current;
  const [expanded, setExpanded] = useState(false);

  const expand = () => {
    Animated.timing(width, {
      useNativeDriver: false,
      toValue: 225,
      duration: 500,
    }).start();
  };

  const colaps = () => {
    Animated.timing(width, {
      useNativeDriver: false,
      toValue: 52,
      duration: 500,
    }).start();
  };

  const handleExpand = (e) => {
    e.stopPropagation();

    if (expanded) {
      colaps();
    } else {
      expand();
    }

    setExpanded(!expanded);
  };

  return {
    handleExpand,
    width,
  };
}
