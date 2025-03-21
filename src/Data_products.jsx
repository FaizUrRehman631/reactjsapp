// import React from "react";
// import { useGetAllProductsQuery } from "./app/apiSlice";

// const Data = () => {
//   const { data, error, isLoading } = useGetAllProductsQuery();
//   console.log(data?.products);
//   if (isLoading) return <p className="text-center text-2xl font-bold my-4">Loading products...</p>;
//   if (error) return <p>Error: {error.message}</p>;
//   return (
//     <>
//       <div className="container mt-5">
//         <h1 className="font-bold text-3xl my-2 text-center">RTK Query</h1>
//         <h2 className="font-bold text-3xl  text-center my-3">
//           Get All Products Details
//         </h2>
//        <div>
//        <table className="table-auto w-full mt-5 border-collapse border border-gray-300">
//           <thead>
//             <tr className="bg-gray-100">
//               <th className="border border-gray-300 px-4 py-2">ID</th>
//               <th className="border border-gray-300 px-4 py-2">Title</th>
//               <th className="border border-gray-300 px-4 py-2">Brand</th>
//               <th className="border border-gray-300 px-4 py-2">Description</th>
//               <th className="border border-gray-300 px-4 py-2">Category</th>
//               <th className="border border-gray-300 px-4 py-2">ReturnPolicy</th>
//               <th className="border border-gray-300 px-4 py-2">
//                 WarrantyInformation / ShippingInformation
//               </th>
             
//               <th className="border border-gray-300 px-4 py-2">Stock <br /> & <br /> AvailabilityStatus</th>
//               <th className="border border-gray-300 px-4 py-2">Tags</th>
//               <th className="border border-gray-300 px-4 py-2">SKU</th>
//               <th className="border border-gray-300 px-4 py-2">Price <br /> &  <br /> Weight</th>
//               <th className="border border-gray-300 px-4 py-2">Images</th>
//               <th className="border border-gray-300 px-4 py-2">Thumbnail</th>
//               <th className="border border-gray-300 px-4 py-2">Reviews</th>
//               {/* <th className="border border-gray-300 px-4 py-2">Actions</th> */}
//             </tr>
//           </thead>
//           <tbody>
//             {data?.products.length > 0 ? (
//               data?.products.map((user, index) => (
//                 <tr key={user?.id || `user-${index}`} className="bg-gray-50">
//                   <td className="border border-gray-300 px-4 py-2">
//                     {user?.id}
//                   </td>
//                   <td className="border border-gray-300 px-4 py-2">
//                     {user?.title}
//                   </td>
//                   <td className="border border-gray-300 px-4 py-2">
//                     {user?.brand}
//                   </td>
//                   <td className="border border-gray-300 px-4 py-2">
//                     {user?.description}
//                   </td>
//                   <td className="border border-gray-300 px-4 py-2">
//                     {user?.category}
//                   </td>
//                   <td className="border border-gray-300 px-4 py-2">
//                     {user?.returnPolicy}
//                   </td>
//                   <td className="border border-gray-300 px-4 py-2">
//                     {user?.warrantyInformation} /<br /> 
//                      {user?.shippingInformation}
//                   </td>
//                   <td className="border border-gray-300 px-4 py-2">
//                     {user?.stock} <br /> & <br /> {user?.availabilityStatus}
//                   </td>
//                   <td className="border border-gray-300 px-4 py-2">
//                    {user?.tags.map((tag, index) => (index ? ", " : "") + tag)}
//                   </td>
//                   <td className="border border-gray-300 px-4 py-2">
//                     {user?.sku}
//                   </td>
//                   <td className="border border-gray-300 px-4 py-2">
//                 Price: {user?.price} <br />
//                    &<br /> Weight: {user?.weight}
//                   </td>
//                   <td className="border border-gray-300 px-4 py-2">
//                    {user?.images?.map((img,index)=>(
//                     <img key={index} src={img} alt={`Product Image ${index + 1}`} className="w-30 h-30 object-cover rounded-lg shadow-md" />
//                    ))}
//                   </td>
//                   <td className="border border-gray-300 px-4 py-2">
//                   <img src={user?.thumbnail} alt="Product Thumbnail" className="w-40 h-40 object-cover rounded-lg shadow-md" />
//                   </td>
//                   <td className="border border-gray-300 px-4 py-2">
//                     {user?.reviews?.length > 0
//                       ? user.reviews.map((nes, i) => (
//                           <div key={i} className="mb-2">
//                             <p>
//                               <strong>Name:</strong> {nes?.reviewerName}
//                             </p>
//                             <li>
//                               <strong>Comment:</strong> {nes?.comment}
//                             </li>
//                             <span>
//                               <strong>Email:</strong> {nes?.reviewerEmail}
//                             </span>
//                             <br />
//                             <span>
//                               <strong>Date:</strong> {nes?.date}
//                             </span>
//                             <br />
//                             <span>
//                               <strong>Rating:</strong> {nes?.rating}
//                             </span>
//                             <hr />
//                           </div>
//                         ))
//                       : "No comments available"}
//                   </td>

//                   {/* <td className="border border-gray-300 px-4 py-2 text-center">
//                   <button
//                     to={`/update/${user?.id}`} 
//                     className=" px-4 py-2 mb-2 mx-2 bg-green-500 text-white rounded-lg shadow-lg hover:bg-green-600"
//                   >
//                     Edit
//                   </button>
//                   <button
//                     className=" px-4 py-2 mx-2 bg-red-500 text-white rounded-lg shadow-lg hover:bg-red-800"
//                     // onClick={() => handleDelete(user.id,user.name)}
//                   >
//                     Delete
//                   </button>
//                 </td> */}
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td
//                   colSpan="3"
//                   className="border border-gray-300 px-4 py-2 text-center"
//                 >
//                   No Users Available
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//        </div>
//       </div>
//     </>
//   );
// };

// export default Data;









import React from "react";
import { useGetAllProductsQuery } from "./app/apiSlice";

const Data_products = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();

  if (isLoading)
    return <p className="text-center text-2xl font-bold my-4">Loading products...</p>;
  if (error) return <p className="text-red-500 text-center">Error: {error.message}</p>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">RTK Query - Product List</h1>
      <div className=" shadow-lg rounded-lg border border-gray-200">
        <table className="min-w-full bg-white border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-900 text-white">
              {[
                "ID", "Title", "Brand", "Description", "Category", "Return Policy",
                "Warranty / Shipping", "Stock & Availability", "Tags", "SKU", "Price & Weight",
                "Images", "Thumbnail", "Reviews"
              ].map((heading) => (
                <th key={heading} className="border border-gray-300 px-4 py-3 text-left font-semibold">
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data?.products.length > 0 ? (
              data.products.map((product) => (
                <tr key={product.id} className="border border-gray-300 hover:bg-gray-100">
                  <td className="px-4 py-3">{product.id}</td>
                  <td className="px-4 py-3 font-medium text-gray-700">{product.title}</td>
                  <td className="px-4 py-3">{product.brand}</td>
                  <td className="px-4 py-3">{product.description}</td>
                  <td className="px-4 py-3">{product.category}</td>
                  <td className="px-4 py-3">{product.returnPolicy}</td>
                  <td className="px-4 py-3">{product.warrantyInformation} / {product.shippingInformation}</td>
                  <td className="px-4 py-3">{product.stock} | {product.availabilityStatus}</td>
                  <td className="px-4 py-3">{product.tags?.join(", ")}</td>
                  <td className="px-4 py-3">{product.sku}</td>
                  <td className="px-4 py-3">${product.price} / {product.weight}kg</td>
                  <td className="px-4 py-3 flex flex-wrap gap-2">
                    {product.images?.map((img, index) => (
                      <img key={index} src={img} alt={`Product ${index}`} className="w-16 h-16 object-cover rounded shadow" />
                    ))}
                  </td>
                  <td className="px-4 py-3">
                    <img src={product.thumbnail} alt="Thumbnail" className="w-20 h-20 object-cover rounded-lg shadow" />
                  </td>
                  <td className="px-4 py-3">
                    {product.reviews?.length > 0 ? (
                      product.reviews.map((review, i) => (
                        <div key={i} className="border-b py-2 text-sm">
                          <p><strong>{review.reviewerName}</strong> ({review.rating}★)</p>
                          <p className="italic">"{review.comment}"</p>
                          <span className="text-gray-500 text-xs">{review.date}</span>
                        </div>
                      ))
                    ) : (
                      <p className="text-gray-500 text-sm">No reviews</p>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="14" className="px-4 py-3 text-center text-gray-600">No Products Available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Data_products;
