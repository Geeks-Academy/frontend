import React, { useCallback, useState } from 'react';
import { usePaginatedQuery } from 'react-query';
import axios from 'axios';
import Pagination from './Pagination';

type PageNumber = number;

const ParentComponent = (): JSX.Element => {
  const [page, setPage] = useState<PageNumber>(1);

  const API = `https://api.instantwebtools.net/v1/passenger?page=`;

  const fetchProjects = useCallback(
    async (key, p = 0) => {
      const { data } = await axios.get(`${API}${p}&size=10`);
      return data;
    },
    [API]
  );

  const { isLoading, isError, error, resolvedData, latestData, isFetching } = usePaginatedQuery(
    ['data', page],
    fetchProjects
  );

  function isErr(err: unknown): err is Error {
    return err instanceof Error;
  }

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '800px' }}
    >
      <span style={{ marginTop: '50px', height: '50px' }}>Current Page: {page}</span>
      {isFetching ? <span> Featch...</span> : null}
      {isLoading ? (
        <div style={{ height: '400px' }}>Loading...</div>
      ) : (
        <ul style={{ height: '400px' }}>
          {resolvedData.data.map((item: any) => (
            <div key={item.name}> {item.name}</div>
          ))}
        </ul>
      )}
      {isError && <div>Error: {isErr(error) ? 'is wrong' : null}</div>}
      <Pagination
        isLoading={isLoading}
        resolvedData={resolvedData}
        latestData={latestData}
        page={page}
        setPage={setPage}
      />
    </div>
  );
};

export default ParentComponent;
