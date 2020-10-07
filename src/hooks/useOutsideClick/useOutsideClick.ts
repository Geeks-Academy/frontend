import { useEventListener } from 'hooks';
import { RefObject } from 'react';

const useOutsideClick = (ref: RefObject<HTMLElement>, callback: () => void): void => {
  const handleClick = (e: Event) => {
    if (ref.current && !ref.current.contains(e.target as HTMLElement)) {
      callback();
    }
  };
  useEventListener('click', handleClick);
};

export default useOutsideClick;
