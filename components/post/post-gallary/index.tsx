import { View } from "react-native";
import ImageModal from "../image-modal";

export default function PostGallary({ images }) {
  return (
    <View
      style={{
        flexDirection: "row",
        marginVertical: 16,
        flexWrap: "wrap",
        gap: 20,
      }}
    >
      {images.map(({ image, id }) => (
        <ImageModal imageSrc={image} key={id} />
      ))}
    </View>
  );
}
