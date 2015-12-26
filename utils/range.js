'use strict';

/**
 * Generate an array of integers starting at `begin` , incrementing by `step`, and ending before `end`.
 * 
 * @param begin {number}
 * @param end {number}
 * @param step {number|*}
 * @returns {Array}
 * @api
 */
function range(begin, end, step) {
  if (arguments.length === 1) {
		end = begin;
		begin = 0;
  }

  step = step || 1;

  let x, r = [];

  for (x = begin; (end - x) * step > 0; x += step) {
    r.push(x);
  }

  return r;
}

module.exports = range;
