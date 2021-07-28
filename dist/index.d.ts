import { GetArraySum } from './types';
/**
 * @description
 * get sum of array numbers
 *
 * @param {any[]} array - array with numbers which need sum
 * @param {boolean} shouldIgnoreNotNumber - should return NaN if in array will be NaN
 * @returns {number}
 *
 * @example
 * getArraySum([1,2,3])
 * // => 6
 *
 * getArraySum([1,2,{},3])
 * // => NaN
 *
 * getArraySum([1,2,{},3, true])
 * // => 6
 */
declare const getArraySum: GetArraySum;
export default getArraySum;
