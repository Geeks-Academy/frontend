import { useState } from 'react';

const useDebounce = () => {
  const [typingTimeout, setTypingTimeout] = useState<number>();
  return (action: () => void, waitTime: number) => {
    clearTimeout(typingTimeout);
    const timeout: number = setTimeout(() => action(), waitTime);
    setTypingTimeout(timeout);
  };
};

export default useDebounce;
