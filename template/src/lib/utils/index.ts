export const getRandom = (id = 0, max = 100, min = 1): number => {
  const r = (Math.abs(Math.sin(id)) * 10 ** 4) % 1;
  return Math.floor(r * (max - min + 1)) + min;
};

export const getRandoms = (id, max, min = 1, num = 1): number[] => {
  const randoms = Array.from(Array(num), (el, i) =>
    getRandom(id + i, max, min)
  );
  return randoms;
};
