const useTextClip = (text: string, maxChar = 70): string => {
  if (text.length > maxChar) {
    text = `${text.substring(0, maxChar)}...`;
  }
  return text;
};

export default useTextClip;
