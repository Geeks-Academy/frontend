import { Dispatch, SetStateAction, useEffect, useState } from 'react';

const useDocumentTitle = (title: string): Dispatch<SetStateAction<string>> => {
  const [documentTitle, setDocumentTitle] = useState<string>(title);

  useEffect(() => {
    document.title = documentTitle;
  }, [documentTitle]);

  return setDocumentTitle;
};

export default useDocumentTitle;
