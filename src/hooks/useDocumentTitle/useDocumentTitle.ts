import { useEffect, useState } from 'react';

const useDocumentTitle = (title: string): void => {
  const [documentTitle] = useState<string>(title);

  useEffect(() => {
    document.title = documentTitle;
  }, [documentTitle]);
};

export default useDocumentTitle;
