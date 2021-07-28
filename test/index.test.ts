import getArraySum from '../src'

test('function returns the sum of an array of numbers', () => {

    const sum = getArraySum([1,2,3])
    
    expect(sum).toBe(6)
});

test('function return NaN if shouldIgnoreNotNumber === false, and not a number was in array', () => {

    const sum = getArraySum([1,2,{},3])

    expect(sum).toBeNaN()
});

test('function return NaN if shouldIgnoreNotNumber === false, and not a number was in array first', () => {

    const sum = getArraySum([{}, 1,2,3])

    expect(sum).toBeNaN()
});

test('function return NaN if shouldIgnoreNotNumber === false, and not a number was in array last', () => {

    const sum = getArraySum([1,2,3, {}])

    expect(sum).toBeNaN()
});

test('function returns the sum of an array of numbers, ignore not number array keys', () => {

    const sum = getArraySum([1,2,{},3], true)
    
    expect(sum).toBe(6)
});

test('function returns the sum of an array of numbers, ignore not number array keys(NaN in start)', () => {

    const sum = getArraySum([{},1,2,3], true)

    expect(sum).toBe(6)
});

test('function returns the sum of an array of numbers, ignore not number array keys(NaN in finish)', () => {

    const sum = getArraySum([1,2,3, {}], true)

    expect(sum).toBe(6)
});

test('function return 0 if array empty', () => {

    const sum = getArraySum([])

    expect(sum).toBe(0)
});

test('function return 0 if array has not number values and shouldIgnoreNotNumber === true', () => {

    const sum = getArraySum([{},[], () => ''], true)

    expect(sum).toBe(0)
});