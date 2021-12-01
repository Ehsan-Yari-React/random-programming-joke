import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const jokeApi = createApi({
  reducerPath: "jokeApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://v2.jokeapi.dev/" }),
  endpoints: (builder) => ({
    getJoke: builder.query<{ joke: string }, void>({
      query: () => {
        return {
          url: "joke/Programming",
          params: {
            type: "single",
          },
        };
      },
    }),
  }),
});

export const { useGetJokeQuery } = jokeApi;
