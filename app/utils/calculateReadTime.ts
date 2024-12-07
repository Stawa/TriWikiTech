const calculateReadTime = (totalCharacters: number): number => {
  const charsPerMinute = 1000;
  return Math.ceil(totalCharacters / charsPerMinute);
};

export default calculateReadTime;
