let statuses = {
  OPEN: Symbol('Open'),
  IN_PROGRESS: Symbol('In progress'),
  COMPLETED: Symbol('Completed'),
  HOLD: Symbol('On hold'),
  CANCELED: Symbol('Canceled')
};

let status = Symbol('status');
let task = {
  [status]: statuses.OPEN,
  description: 'Learn ES6 Symbol'
};
console.log(task);
console.log(Object.getOwnPropertySymbols(task));
