export const formattedTime = (timer: number): string => {
  const msec: number = timer % 100;
  const sec: number = Math.floor(timer / 100) % 60;
  const min: number = Math.floor(timer / 6000) % 60;
  const hr: number = Math.floor(timer / 360000);

  const format = (val: number): string => (val >= 10 ? val.toString() : `0${val}`);
  
  return `${format(hr)} hr : ${format(min)} min : ${format(sec)} sec : ${format(msec)} msec`;
};
