import React, { useState } from 'react';
import useCoursesList from 'hooks/useCoursesList';
import Pagination from 'components/molecules/Pagination';
import { ICurrentPage } from './PaginationPage.model';

const PaginationPage = (): JSX.Element => {
  const [page, setPage] = useState<ICurrentPage>(1);

  const { isLoading, isError, error, resolvedData, latestData, isFetching } = useCoursesList(page);

  /// how to type this Error correctly?
  function isErr(err: unknown): err is Error {
    return err instanceof Error;
  }
  // data from request
  // console.log(resolvedData);

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

export default PaginationPage;
