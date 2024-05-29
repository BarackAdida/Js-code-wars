const nums = ["aee", "oeu", "iio", "aeu", "aei", "ouu"]
let numbers = nums.join('').split('').sort().join('').replace(/[a]/gi, '')


console.log(numbers)