import React from "react";
import { useGetAllPostsQuery } from "./app/apiSlice";

const Data_posts = () => {
  const { data, error, isLoading } = useGetAllPostsQuery();
  // console.log("first", data?.posts);
  if (isLoading)
    return (
      <p className="text-center text-2xl font-bold my-4">Loading products...</p>
    );
  if (error)
    return <p className="text-red-500 text-center">Error: {error.message}</p>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
        RTK Query - Posts List
      </h1>
      <div className=" shadow-lg rounded-lg border border-gray-200">
        <table className="min-w-full bg-white border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-900 text-white">
              {[
                "ID",
                "User-ID",
                "Title",
                "Body",
                "Views",
                "Tags",
                "Reactions",
              ].map((heading) => (
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
            {data?.posts.length > 0 ? (
              data.posts.map((product) => (
                <tr
                  key={product.id}
                  className="border border-gray-300 hover:bg-gray-100"
                >
                  <td className="px-4 py-3">{product.id}</td>
                  <td className="px-4 py-3">{product.userId}</td>
                  <td className="px-4 py-3">{product.title}</td>
                  <td className="px-4 py-3 font-medium text-gray-700">
                    {product.body}
                  </td>
                  <td className="px-4 py-3">{product.views}</td>
                  <td className="px-4 py-3">{product.tags?.join(", ")}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    👍 {product?.reactions?.likes} | 👎 {product?.reactions?.dislikes}
                  </td>

                  {/* <td className="px-4 py-3">
                    {product.reactions?.length > 0 ? (
                      product.reactions.map((review, i) => (
                        <div key={i} className="border-b py-2 text-sm">
                          <p><strong>{review.dislikes}</strong> </p>
                          <p className="italic">"{review.likes}"</p>
                          
                        </div>
                      ))
                    ) : (
                      <p className="text-gray-500 text-sm">No reviews</p>
                    )}
                  </td> */}
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="14"
                  className="px-4 py-3 text-center text-gray-600"
                >
                  No Products Available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Data_posts;
