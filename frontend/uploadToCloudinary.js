import axios from "axios";

export const uploadToCloudinary = async (file) => {
  const { data } = await axios.get("https://live-chat-api-nbq4.onrender.com//api/cloudinary/signature");

  const formData = new FormData();
  formData.append("file", file);
  formData.append("api_key", data.apiKey);
  formData.append("timestamp", data.timestamp);
  formData.append("signature", data.signature);
  formData.append("folder", data.folder);

  const uploadRes = await axios.post(
    `https://api.cloudinary.com/v1_1/${data.cloudName}/auto/upload`,
    formData
  );

  return uploadRes.data.secure_url;
};
