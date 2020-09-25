import { useEventListener } from 'hooks';

const useOutsideClick = (ref: any, callback: () => void): void => {
  const handleClick = (e: Event) => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };

  useEventListener('click', handleClick);
};

export default useOutsideClick;
