export const generateLoop = (amount, callback) => new Array(amount).fill(`*`).map(callback);

export const render = (container, template, place) => container.insertAdjacentHTML(place, template);

export const getRandomInt = (min, max) => {
  const currentMin = Math.ceil(min);
  const currentMax = Math.floor(max);
  const permissibleRange = Math.random() * (currentMax - currentMin + 1);
  return Math.floor(permissibleRange) + currentMin;
};

export const shuffleArray = (array) => {
  const shuffledArray = array.slice();

  shuffledArray.forEach((item, index) => {
    const randomPosition = Math.floor(Math.random() * index);
    [shuffledArray[index], shuffledArray[randomPosition]] = [shuffledArray[randomPosition], shuffledArray[index]];
  });

  return shuffledArray;
};

export const humanizeTime = (timestamp, isDuration = false) => {
  const currentDate = new Date(timestamp);

  if (!isDuration) {
    return `${currentDate.getHours()}H ${currentDate.getMinutes()}M`;
  }

  if (currentDate.getDate() >= 2) {
    return `${currentDate.getDate()}D ${currentDate.getHours()}H ${currentDate.getMinutes()}M`;
  } else if (currentDate.getHours() < 1) {
    return `${currentDate.getMinutes()}M`;
  } else {
    return `${currentDate.getHours()}H ${currentDate.getMinutes()}M`;
  }
};
