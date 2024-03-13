import axios from "axios";

export default async function uploadFile({ uri, name, uploadPath }) {
  const formData: any = new FormData();
  formData.append("upload", uploadPath);

  formData.append("image", {
    type: "image/jpeg",
    name,
    uri,
  });

  return await axios.post("/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}
