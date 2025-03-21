import React from "react";
import { useGetAllImagesQuery, useDeleteImageMutation } from "./app/imageSlice";
import { Link } from "react-router-dom";
import UploadImage from "./uploadImage";

const Images = () => {
  const { data, error, isLoading } = useGetAllImagesQuery();
  const [deleteImage] = useDeleteImageMutation();
    // console.log("Images:",  data);
  if (isLoading)
    return (
      <p className="text-center text-2xl font-bold my-4">Loading images...</p>
    );
  if (error)
    return <p className="text-red-500 text-center">Error: {error.message}</p>;

const handleDelete = async (id)=>{
  // console.log("Delete Image id:", id);
    if (window.confirm("Are you sure you want to delete this image?")) {
        try {
          await deleteImage(id).unwrap();
          alert("Image deleted successfully!");
        } catch (error) {
          console.error("Failed to delete image:", error);
          alert("Error deleting image!");
        }
      }
}

  return (
    <>
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          RTK Query -Fetching All Images From Database
        </h1>
        <div className="my-5">
        <UploadImage/>
        </div>
        <div className=" shadow-lg rounded-lg border border-gray-200">
          <table className="min-w-full bg-white border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-900 text-white">
                {["ID", "created_at", "image_path","Actions"].map((heading) => (
                  <th
                    key={heading}
                    className="border border-gray-300 px-4 py-3 text-left font-semibold"
                  >
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data?.data?.length > 0 ? (
                data.data.map((image, index) => (
                  <tr
                    key={image.id || index}
                    className="border border-gray-300 hover:bg-gray-100"
                  >
                    <td className="px-4 py-3">{image.id}</td>
                    <td className="px-4 py-3">
                      {new Date(image.created_at).toLocaleDateString()}
                    </td>
                    <td className="px-4 py-3">
                      <img
                        src={`http://127.0.0.1:8000/storage/${image.image_path}`}
                        alt="Image"
                        className="w-50 h-50 object-cover rounded-lg shadow mt-1 hover:w-[50%] hover:h-[50%]"
                      />
                    </td>
                    <td className="px-4 py-3">
                      <Link
                        className="text-blue-500 hover:underline"
                        to={`/images/update/${image.id}`}
                      >
                        Update
                      </Link> - 
                      <button
                        onClick={()=>
                            handleDelete(image.id)}
                        className="text-blue-500 hover:underline"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="14"
                    className="px-4 py-3 text-center text-gray-600"
                  >
                    No images Available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        
      </div>
    </>
  );
};

export default Images;
