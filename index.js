/**
 * [Exercise 1] trimProperties copies an object trimming its properties
 * @param {object} obj - an object with properties that are strings
 * @returns {object} - a copy of the object with strings trimmed
 *
 * EXAMPLE
 * trimProperties({ name: '  jane  ' }) // returns a new object { name: 'jane' }
 */
function trimProperties(obj) {
  const newObj = { ...obj }
    Object.keys(newObj).forEach(key => {
      newObj[key] = newObj[key].trim()
    })
    return newObj
}
/**
 * [Exercise 2] trimPropertiesMutation trims in place the properties of an object
 * @param {object} obj - an object with properties that are strings
 * @returns {object} - the same object with strings trimmed
 *
 * EXAMPLE
 * trimPropertiesMutation({ name: '  jane  ' }) // returns the object mutated in place { name: 'jane' }
 */
function trimPropertiesMutation(obj) {
  Object.keys(obj).forEach(key => {
    obj[key] = obj[key].trim()
  })
  return obj
}

/**
 * [Exercise 3] findLargestInteger finds the largest integer in an array of integers
 * @param {number[]} integers - an array of integers
 * @returns {number} - the largest integer
 *
 * EXAMPLE
 * findLargestInteger([2, 1, 7, 3, 14, 7]) // returns 14
 */
function findLargestInteger(integers) {
  return Math.max(...integers)
}

class Counter {
  /**
   * [Exercise 4A] Counter creates a counter
   * @param {number} initialNumber - the initial state of the count
   */
  constructor(initialNumber) {
    this.init = initialNumber + 1
  }

  /**
   * [Exercise 4B] Counter.prototype.countDown counts down to zero
   * @returns {number} - the next count, does not go below zero
   *
   * EXAMPLE
   * const counter = new Counter(3)
   * counter.countDown() // returns 3
   * counter.countDown() // returns 2
   * counter.countDown() // returns 1
   * counter.countDown() // returns 0
   * counter.countDown() // returns 0
   */
  countDown() {
    if (this.init > 0) {
      this.init -= 1
      return this.init
    } else {
      return this.init
    }
  }
}

class Seasons {
  /**
   * [Exercise 5A] Seasons creates a seasons object
   */
  constructor() {
    this.seasons = ["spring", "summer", "fall", "winter"]
    this.count = 0
  }

  /**
   * [Exercise 5B] Seasons.prototype.next returns the next season
   * @returns {string} - the next season starting with "summer"
   *
   * EXAMPLE
   * const seasons = new Seasons()
   * seasons.next() // returns "summer"
   * seasons.next() // returns "fall"
   * seasons.next() // returns "winter"
   * seasons.next() // returns "spring"
   * seasons.next() // returns "summer"
   */
  next() {
    this.count ++
    return this.seasons[this.count % 4]
  }
}

class Car {
  /**
   * [Exercise 6A] Car creates a car object
   * @param {string} name - the name of the car
   * @param {number} tankSize - capacity of the gas tank in gallons
   * @param {number} mpg - miles the car can drive per gallon of gas
   */
  constructor(name, tankSize, mpg) {
    this.name = name
    this.tankSize = tankSize
    this.mpg = mpg
    this.odometer = 0 // car initializes with zero miles
    this.tank = tankSize // car initializes full of gas
  }

  /**
   * [Exercise 6B] Car.prototype.drive adds miles to the odometer and consumes fuel according to mpg
   * @param {string} distance - the distance we want the car to drive
   * @returns {number} - the updated odometer value
   *
   * EXAMPLE
   * const focus = new Car('focus', 20, 30)
   * focus.drive(100) // returns 100
   * focus.drive(100) // returns 200
   * focus.drive(100) // returns 300
   * focus.drive(200) // returns 500
   * focus.drive(200) // returns 600 (ran out of gas after 100 miles)
   */
  drive(distance) {
    const maxDistance = this.tank * this.mpg
    if (maxDistance > distance) {
      this.odometer += distance
      this.tank -= distance / this.mpg
      return this.odometer
    } else {
      this.odometer += maxDistance
      this.tank = 0
      return this.odometer
    }
  }

  /**
   * [Exercise 6C] Adds gallons to the tank
   * @param {number} gallons - the gallons of fuel we want to put in the tank
   * @returns {number} - the miles that can be driven after refueling
   *
   * EXAMPLE
   * const focus = new Car('focus', 20, 30)
   * focus.drive(600) // returns 600
   * focus.drive(1) // returns 600 (no distance driven as tank is empty)
   * focus.refuel(99) // returns 600 (tank only holds 20)
   */
  refuel(gallons) {
    if(this.tank + gallons >= this.tankSize){
      this.tank = 20
    } else {
      this.tank += gallons
    }
    return this.tank
  }
}

/**
 * [Exercise 7] Asynchronously resolves whether a number is even
 * @param {number} number - the number to test for evenness
 * @returns {promise} - resolves true if number even, false otherwise
 *
 * EXAMPLE
 * isEvenNumberAsync(2).then(result => {
 *    // result is true
 * })
 * isEvenNumberAsync(3).then(result => {
 *    // result is false
 * })
 * isEvenNumberAsync('foo').catch(error => {
 *    // error.message is "number must be a number"
 * })
 * isEvenNumberAsync(NaN).catch(error => {
 *    // error.message is "number must be a number"
 * })
 */
function isEvenNumberAsync(number) {
  // ✨ implement
}

module.exports = {
  trimProperties,
  trimPropertiesMutation,
  findLargestInteger,
  isEvenNumberAsync,
  Counter,
  Seasons,
  Car,
}
