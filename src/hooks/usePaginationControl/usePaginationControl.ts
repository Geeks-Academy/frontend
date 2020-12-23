interface IReturnValues {
  setFirstPage: (firstPage: number) => number;
  setPrevPage: (currentPage: number) => number;
  setNextPage: (currentPage: number) => number;
  setLastPage: (lastPage: number) => number;
}

const usePaginationControl = (): IReturnValues => {
  const SCOPE = 1;

  function setFirstPage(firstPage: number) {
    return firstPage;
  }

  function setPrevPage(currentPage: number) {
    return currentPage - SCOPE;
  }

  function setNextPage(currentPage: number) {
    return currentPage + SCOPE;
  }

  function setLastPage(lastPage: number) {
    return lastPage;
  }

  return { setFirstPage, setPrevPage, setNextPage, setLastPage };
};

export default usePaginationControl;
