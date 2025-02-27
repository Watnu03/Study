const replaceDexId = (id) => {
  let replacedId = id;

  if (id < 10) {
    replacedId = `No.00${id}`;
  } else if (id >= 10 && id < 100) {
    replacedId = `No.0${id}`;
  } else if (id >= 100 && id < 1000) {
    replacedId = `No.${id}`;
  } else {
    replacedId = `No.${id}`;
  }

  return replacedId;
};

export default replaceDexId;
