// import React from "react";
// import { useGetAllCartsQuery } from "./app/apiSlice";

// const Data_carts = () => {
//   const { data, error, isLoading } = useGetAllCartsQuery();
//   console.log("first", data?.carts);
//   if (isLoading)
//     return (
//       <p className="text-center text-2xl font-bold my-4">Loading carts...</p>
//     );
//   if (error)
//     return <p className="text-red-500 text-center">Error: {error.message}</p>;

//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
//         RTK Query - Carts List
//       </h1>
//       <div className=" shadow-lg rounded-lg border border-gray-200">
//         <table className="min-w-full bg-white border-collapse border border-gray-300">
//           <thead>
//             <tr className="bg-gray-900 text-white">
//               {[
//                 "ID",
//                 "User-ID",
//                 "Products",
//                 "TotalProducts",
//                 "TotalQuantity",
//                 "DiscountedTotal",
//                 "Reactions",
//               ].map((heading) => (
//                 <th
//                   key={heading}
//                   className="border border-gray-300 px-4 py-3 text-left font-semibold"
//                 >
//                   {heading}
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {data?.carts.length > 0 ? (
//               data.carts.map((cart, i) => (
//                 <tr
//                   key={cart.id || i}
//                   className="border border-gray-300 hover:bg-gray-100"
//                 >
//                   <td className="px-4 py-3">{cart.id}</td>
//                   <td className="px-4 py-3">{cart.userId}</td>
//                   <td className="px-4 py-3">
//                     {cart.products?.length > 0 ? (
//                       cart.products.map((product, i) => (
//                         <div key={i || product.id} className="border-b py-2 text-sm">
//                           <p><strong>{product?.title}</strong> </p>
//                           <p className="italic">Price:"{product?.price}"</p>
//                     <img src={product.thumbnail} alt="Thumbnail" className="w-20 h-20 object-cover rounded-lg shadow" />
                          
//                         </div>
//                       ))
//                     ) : (
//                       <p className="text-gray-500 text-sm">No Products Available</p>
//                     )}
//                   </td>
//                   <td className="px-4 py-3">{cart.totalProducts}</td>
//                   <td className="px-4 py-3 font-medium text-gray-700">
//                     {cart.totalQuantity}
//                   </td>
//                   <td className="px-4 py-3">"{cart.discountedTotal}"</td>
//                   {/* <td className="px-4 py-3">{cart.tags?.join(", ")}</td> */}
//                   <td className="border border-gray-300 px-4 py-2">
//                     👍 {cart?.reactions?.likes} | 👎 {cart?.reactions?.dislikes}
//                   </td>

//                   {/* <td className="px-4 py-3">
//                     {cart.reactions?.length > 0 ? (
//                       cart.reactions.map((review, i) => (
//                         <div key={i} className="border-b py-2 text-sm">
//                           <p><strong>{review.dislikes}</strong> </p>
//                           <p className="italic">"{review.likes}"</p>
                          
//                         </div>
//                       ))
//                     ) : (
//                       <p className="text-gray-500 text-sm">No reviews</p>
//                     )}
//                   </td> */}
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td
//                   colSpan="14"
//                   className="px-4 py-3 text-center text-gray-600"
//                 >
//                   No carts Available
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Data_carts;





import React from "react";
import { useGetAllCartsQuery } from "./app/apiSlice";

const DataCarts = () => {
  const { data, error, isLoading } = useGetAllCartsQuery();
  console.log("Fetched Carts:", data?.carts);

  if (isLoading)
    return (
      <p className="text-center text-2xl font-bold my-4">Loading carts...</p>
    );

  if (error)
    return <p className="text-red-500 text-center">Error: {error.message}</p>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
        RTK Query - Carts List
      </h1>

      <div className="shadow-lg rounded-lg border border-gray-200 overflow-x-auto">
        <table className="min-w-full bg-white border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-900 text-white">
              {[
                "ID",
                "User-ID",
                "Products",
                "Total Products",
                "Total Quantity",
                "Discounted Total",
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
            {data?.carts?.length > 0 ? (
              data.carts.map((cart) => (
                <tr key={cart.id} className="border border-gray-300 hover:bg-gray-100">
                  <td className="px-4 py-3">{cart.id}</td>
                  <td className="px-4 py-3">{cart.userId}</td>

                  {/* Products Column */}
                  <td className="px-4 py-3">
                    {cart.products?.length > 0 ? (
                      cart.products.map((product) => (
                        <div key={product.id} className="border-b py-2 text-sm">
                          <p className="font-semibold">{product.title}</p>
                          <p className="italic">Price: ${product.price}</p>
                          <img
                            src={product.thumbnail}
                            alt={product.title}
                            className="w-20 h-20 object-cover rounded-lg shadow mt-1"
                          />
                        </div>
                      ))
                    ) : (
                      <p className="text-gray-500 text-sm">No Products Available</p>
                    )}
                  </td>

                  <td className="px-4 py-3">{cart.totalProducts}</td>
                  <td className="px-4 py-3 font-medium text-gray-700">{cart.totalQuantity}</td>
                  <td className="px-4 py-3 font-bold text-green-700">${cart.discountedTotal}</td>

                  {/* Reactions Column */}
                  <td className="border border-gray-300 px-4 py-2">
                    👍 {cart?.reactions?.likes || 0} | 👎 {cart?.reactions?.dislikes || 0}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="px-4 py-3 text-center text-gray-600">
                  No carts available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataCarts;
