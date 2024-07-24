const nums = ["aee", "oeu", "iio", "aeu", "aei", "ouu", "aou"]
let numbers = nums.join('').split('').sort().join('').replace(/[a]/gi, '')


console.log(numbers)