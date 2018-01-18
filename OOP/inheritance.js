/**
 * This shows the different types of inheritance in Javascript
 * - Classical inheritance
 * - Prototypical inheritance [Recommended]
 *
 * Favor object composition over inheritance - Erric Elliot
 */


/**
 * Classical inheritance
 */

function Animal(name) {
  this.name = name;
}

Animal.prototype.getName = function() {
  return this.name;
};

function Dog() {
  Animal.apply(this, arguments);
}

Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.constructor = Dog;

/***** is this ☝ just crazy :( ***/


/**
 * Prototypical inheritance
 */

const Vehicle = {
  create: function(name) {
    var self = this;
    self.name = name;
    return self;
  },
  getName: function() {
    return this.name;
  }
};

const Bus = Object.create(Vehicle);

Bus.create = function(name) {
  return Vehicle.create.call(this, name);
};

/**
 * usage
 */
let saloonCar = Bus.create('Honda');
// saloonCar.getName();

/***** better right ☝ I know :) ***/
