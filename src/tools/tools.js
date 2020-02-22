const dateFormat = (fullDate, show = true) => {
  const date = new Date(fullDate);
  const options = {month: `long`};

  if (show) {
    return `${date.toLocaleDateString(`en-EN`, options)} ${date.getFullYear()}`;
  }
  return `${date.getFullYear()}-${date.getMonth() < 10 ? `0${date.getMonth()}` : date.getMonth()}-
          ${date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()}`;
};

const keyIdGenerator = () => {
  return Date.now() + Math.random();
};

export {dateFormat, keyIdGenerator};
