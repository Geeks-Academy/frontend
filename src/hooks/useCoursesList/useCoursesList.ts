import { usePaginatedQuery } from 'react-query';
import axios from 'axios';

// docs about cache https://react-query.tanstack.com/docs/guides/caching

export type ICurrentPage = number;

const API = `https://api.instantwebtools.net/v1/passenger?page=`;

const getCoursesList = async (key: number, currentPage = 0) => {
  const { data } = await axios.get(`${API}${currentPage}&size=10`);
  return data;
};

const useCoursesList = (page: ICurrentPage) => {
  return usePaginatedQuery(['data', page], getCoursesList);
};

export default useCoursesList;
