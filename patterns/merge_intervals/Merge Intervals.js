class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
  print_interval() {
    process.stdout.write(`[${this.start}, ${this.end}]`);
  }
}
function merge(intervals) {
  if (intervals.length < 2) {
    return intervals;
  }
  intervals.sort((a, b) => a.start - b.start);
  const mergedIntervals = [];
  let start = intervals[0].start,
    end = intervals[0].end;
  for (i = 1; i < intervals.length; i++) {
    const interval = intervals[i];
    if (interval.start <= end) {
      end = Math.max(interval.end, end);
    } else {
      mergedIntervals.push(new Interval(start, end));
      start = interval.start;
      end = interval.end;
    }
  }
  mergedIntervals.push(new Interval(start, end));
  return mergedIntervals;
}

process.stdout.write('Merged intervals: ');
let result = merge([
  new Interval(1, 4),
  new Interval(2, 5),
  new Interval(7, 9)
]);
for (i = 0; i < result.length; i++) {
  result[i].print_interval();
}
console.log();

process.stdout.write('Merged intervals: ');
result = merge([new Interval(6, 7), new Interval(2, 4), new Interval(5, 9)]);
for (i = 0; i < result.length; i++) {
  result[i].print_interval();
}
console.log();

process.stdout.write('Merged intervals: ');
result = merge([new Interval(1, 4), new Interval(2, 6), new Interval(3, 5)]);
for (i = 0; i < result.length; i++) {
  result[i].print_interval();
}
console.log();
