import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const imagesApi = createApi({
  reducerPath: "imagesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://127.0.0.1:8000/api/" }),
  tagTypes: ["images"],
  endpoints: (builder) => ({
    getAllImages: builder.query({
      query: () => "images",
      providesTags: ["images"],
    }),
    uploadImage:builder.mutation({
      query:(formData)=>({
        url:"images",
        method: "POST",
        body: formData,
      }),
      invalidatesTags:["images"],
    }),

    updateImage: builder.mutation({
      query: ({ id, formData }) => ({
        url: `images/${id}`,
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["images"],
    }),

    deleteImage: builder.mutation({
      query: (id) => ({
        url: `images/${id}`,
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",  
      },
      }),
      invalidatesTags: ["images"],
    }),
    
  }),
});

export const {
  useGetAllImagesQuery,
  useUpdateImageMutation,
  useDeleteImageMutation,
  useUploadImageMutation,
} = imagesApi;
