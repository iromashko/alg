const Heap = require('./collections/heap'); //http://www.collectionsjs.com

class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
  print_interval() {
    process.stdout.write(`[${this.start}, ${this.end}]`);
  }
}
class EmployeeInterval {
  constructor(interval, employeeIndex, intervalIndex) {
    this.interval = interval;
    this.employeeIndex = employeeIndex;
    this.intervalIndex = intervalIndex;
  }
}
function find_employee_free_time(schedule) {
  let n = schedule.length,
    result = [];
  if (schedule === null || n === 0) {
    return result;
  }
  minHeap = new Heap([], null, (a, b) => a.interval.start < b.interval.start);
  for (i = 0; i < n; i++) {
    minHeap.push(new EmployeeInterval(schedule[i][0], i, 0));
  }
  previousInterval = minHeap.peek().interval;
  while (minHeap.length > 0) {
    const queueTop = minHeap.pop();
    if (previousInterval.end < queueTop.interval.start) {
      result.push(new Interval(previousInterval.end, queueTop.interval.start));
      previousInterval = queueTop.interval;
    } else {
      if (previousInterval.end < queueTop.interval.end) {
        previousInterval = queueTop.interval;
      }
    }
    const employeeSchedule = schedule[queueTop.employeeIndex];
    if (employeeSchedule.length > queueTop.intervalIndex + 1) {
      minHeap.push(
        new EmployeeInterval(
          employeeSchedule[queueTop.intervalIndex + 1],
          queueTop.employeeIndex,
          queueTop.intervalIndex + 1
        )
      );
    }
  }
  return result;
}

let input = [
  [new Interval(1, 3), new Interval(5, 6)],
  [new Interval(2, 3), new Interval(6, 8)]
];
process.stdout.write('Free intervals: ', (end = ''));
let result = find_employee_free_time(input);
for (i = 0; i < result.length; i++) {
  result[i].print_interval();
}
console.log();

input = [
  [new Interval(1, 3), new Interval(9, 12)],
  [new Interval(2, 4)],
  [new Interval(6, 8)]
];
process.stdout.write('Free intervals: ', (end = ''));
result = find_employee_free_time(input);
for (i = 0; i < result.length; i++) {
  result[i].print_interval();
}
console.log();

input = [
  [new Interval(1, 3)],
  [new Interval(2, 4)],
  [new Interval(3, 5), new Interval(7, 9)]
];
process.stdout.write('Free intervals: ', (end = ''));
result = find_employee_free_time(input);
for (i = 0; i < result.length; i++) {
  result[i].print_interval();
}
console.log();
