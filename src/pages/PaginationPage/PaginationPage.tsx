import React, { useState } from 'react';
import Pagination from 'components/molecules/Pagination';
import Spinner from 'components/atoms/Spinner';
import { useListCoursesQuery } from 'redux/services/courses';
import { ICourse, ICurrentPage } from './PaginationPage.model';

// Pagination example on /pagiantion route

const PaginationPage = (): JSX.Element => {
  const [page, setPage] = useState<ICurrentPage>(1);
  const { data: courses, isLoading, isFetching } = useListCoursesQuery(page);

  // what we got with this hook
  // console.log(useListCoursesQuery(page));

  if (!courses?.data) {
    return <div>No posts :(</div>;
  }

  // isFetching flag can show what data was fetched. If you go to the next page isFetching is true and a new request is running but when you go to the previous page data was saved and isFeatching flag is false and set "This list is fetched"

  // console.log(
  //   'Current data from first item of array is =>',
  //   courses.data.map((item) => item.name)[0]
  // );
  // console.log('isFetchting =>', isFetching);

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '800px' }}
    >
      <span style={{ marginTop: '50px', height: '50px' }}>
        Current Page: {page} / {courses.totalPages}
      </span>
      {isLoading ? (
        <div style={{ height: '400px' }}>
          <Spinner />
        </div>
      ) : (
        <ul style={{ height: '400px' }}>
          {courses.data.map((item: ICourse) => (
            <div key={item.name}> {item.name}</div>
          ))}
        </ul>
      )}
      {isFetching ? (
        <span style={{ height: '60px' }}>
          <Spinner />
        </span>
      ) : (
        <span style={{ height: '60px' }}>This list is fetched</span>
      )}
      <Pagination
        isLoading={isLoading}
        isFetching={isFetching}
        courses={courses}
        page={page}
        setPage={setPage}
      />
    </div>
  );
};

export default PaginationPage;
