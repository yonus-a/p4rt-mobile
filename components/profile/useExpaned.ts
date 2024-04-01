import { useDispatch, useSelector } from "react-redux";
import { setExpanded } from "./profileSlice";
import { Animated } from "react-native";
import { useRef } from "react";

export default function useExpanded() {
  const { expanded } = useSelector((state: any) => state.profile);
  const width = useRef(new Animated.Value(52)).current;
  const dispatch = useDispatch();

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

    dispatch(setExpanded(!expanded));
  };

  return {
    handleExpand,
    width,
  };
}
