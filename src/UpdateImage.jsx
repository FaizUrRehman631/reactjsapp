import React, { useState } from "react";
import { useUpdateImageMutation } from "./app/imageSlice";
import { useNavigate, useParams } from "react-router-dom";

const UpdateImage = () => {
  const { id } = useParams(); // Get image ID from URL
  const navigate = useNavigate();
  const [updateImage, { isLoading }] = useUpdateImageMutation();
  const [selectedFile, setSelectedFile] = useState(null);
  console.log("selectedFile:", selectedFile);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]); // Save the selected file
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedFile) {
      alert("Please select an image to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("image_path", selectedFile);
    formData.append("_method", "PUT");
    console.log([...formData.entries()]);
    try {
      await updateImage({ id, formData }).unwrap();

      alert("Image updated successfully!");
      navigate("/images"); 
    } catch (error) {
      console.error("Update failed:", error);
      alert("Failed to update image.");
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center">Update Image</h1>
      <form onSubmit={handleSubmit} className="mt-4">
        <label className="block mb-2 font-semibold">New Image Path:</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="border border-gray-300 p-2 w-full rounded"
          placeholder="Enter new image path"
        />
        <button
          type="submit"
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
          disabled={isLoading}
        >
          {isLoading ? "Updating..." : "Update Image"}
        </button>
      </form>
    </div>
  );
};

export default UpdateImage;
