export const getCurrentDate = () => {
  return new Date();
};

export const getCurrentMonth = () => {
  return new Date().getMonth();
};

export const setCurrentDate = () => {
  return new Date().setDate(2020);
};
