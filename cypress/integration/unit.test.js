/// <reference types="cypress" />

import binarySearch from '../../algoexpert/binarySearch';

describe('Unit Test Application Code', function() {
  before(() => {
    expect(binarySearch, 'binarySearch').to.be.a('function');
  });

  context('binarySearch', function() {
    it('search', function() {
      expect(binarySearch([1, 5, 23, 111], 111)).to.eq(3);
    });

    // it('can subtract numbers', function() {
    //   expect(subtract(5, 12)).to.eq(-7);
    // });

    // it('can divide numbers', function() {
    //   expect(divide(27, 9)).to.eq(3);
    // });

    // it('can muliple numbers', function() {
    //   expect(multiply(5, 4)).to.eq(20);
    // });
  });

  // context('fizzbuzz.js', function() {
  //   function numsExpectedToEq(arr, expected) {
  //     // loop through the array of nums and make
  //     // sure they equal what is expected
  //     arr.forEach(num => {
  //       expect(fizzbuzz(num)).to.eq(expected);
  //     });
  //   }

  //   it('returns "fizz" when number is multiple of 3', function() {
  //     numsExpectedToEq([9, 12, 18], 'fizz');
  //   });

  //   it('returns "buzz" when number is multiple of 5', function() {
  //     numsExpectedToEq([10, 20, 25], 'buzz');
  //   });

  //   it('returns "fizzbuzz" when number is multiple of both 3 and 5', function() {
  //     numsExpectedToEq([15, 30, 60], 'fizzbuzz');
  //   });
  // });
});
