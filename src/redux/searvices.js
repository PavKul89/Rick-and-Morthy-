import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const rickAndMortyApi = createApi({
  reducerPath: 'rickAndMortyApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api/' }),
  endpoints: (builder) => ({
    getCharacters: builder.query({
      query: (page = 1) => `character/?page=${page}`,
      transformResponse: (response) => ({
        results: response.results.map((character) => ({
          id: character.id,
          name: character.name,
          status: character.status,
          species: character.species,
          gender: character.gender,
          image: character.image,
        })),
        info: response.info,
      }),
    }),
  }),
})

export const { useGetCharactersQuery } = rickAndMortyApi
