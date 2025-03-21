import React, { useState } from "react";
import { useUploadImageMutation } from "./app/imageSlice";

const UploadImage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadImage, { isLoading, error }] = useUploadImageMutation();
    
  

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Please select an image first.");
      return;
    }

    const formData = new FormData();
    formData.append("image_path", selectedFile);

    try {
      const response = await uploadImage(formData).unwrap();
      alert(response.message);
    } catch (err) {
      console.error("Upload failed:", err);
    }
  };

  return (
    <>
      <div>
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">
         Upload A New Image
        </h2>
      <input type="file" onChange={handleFileChange} accept="image/*" />
      <button onClick={handleUpload} disabled={isLoading}>
        {isLoading ? "Uploading..." : "Upload Image"}
      </button>
      {error && <p style={{ color: "red" }}>Upload failed. Try again.</p>}
    </div>
    </>
  );
};

export default UploadImage;
