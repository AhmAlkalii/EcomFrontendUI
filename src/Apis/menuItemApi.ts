import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"


const menuItemApi = createApi({
    reducerPath: "menuItemApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://redmangoapi.azurewebsites.net/api/"
    }),
    tagTypes: ["MenuItems"],
    endpoints: (builder) => ({
        getMenuItems: builder.query({
            query: () => ({
                url: "menuItem"
            }),
            providesTags: ["MenuItems"],
        }),
        getMenuItemsId: builder.query({
            query: (id) => ({
                url: `menuItem/${id}`
            }),
            providesTags: ["MenuItems"],
        }),
    })
})


export const {useGetMenuItemsQuery, useGetMenuItemsIdQuery} = menuItemApi;
export default menuItemApi;