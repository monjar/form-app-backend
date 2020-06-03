repository = require("./repository");

const getOne = (id) => {
  const data = repository.getAll();
  const response = [{}, true];
  data.forEach((element) => {
    if (element.id === id) {
      response[0] = element;
      response[1] = false;
    }
  });
  return response;
};
const add = (data) => {
  repository.add(data);
};
const getAll = () => {
  return repository.getAll();
};
module.exports = {
  getAll: getAll,
  getOne: getOne,
  add: add,
};
