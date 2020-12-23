import { createApi, fetchBaseQuery } from '@rtk-incubator/rtk-query';

const API = `https://api.instantwebtools.net/v1/`;

export interface ListResponse<T> {
  page: number;
  totalPassengers: number;
  totalPages: number;
  data: T[];
  size: number;
}

export interface ICourse {
  id: string;
  name: string;
}

export const coursesApi = createApi({
  reducerPath: 'coursesApi',
  baseQuery: fetchBaseQuery({ baseUrl: API }),
  endpoints: (builder) => ({
    listCourses: builder.query<ListResponse<ICourse>, number | void>({
      query: (page = 1, size = 15) => `passenger?page=${page}&size=${size}`,
    }),
  }),
});

export const { useListCoursesQuery } = coursesApi;
