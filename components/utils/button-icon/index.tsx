import { Image, Pressable } from "react-native";
import styles from "./style";

interface Props {
  height: number;
  width: number;
  onPress: any;
  source: any;
  style?: any;
  alt: string;
}

export default function ButtonIcon({
  onPress,
  height,
  width,
  source,
  style,
  alt,
}: Props) {
  return (
    <Pressable onPress={onPress}>
      <Image
        style={[styles.image, style]}
        source={source}
        height={height}
        width={width}
        alt={alt}
      />
    </Pressable>
  );
}
