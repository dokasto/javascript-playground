'use strict';

/**
 * Implementation of Dijkstra's two stack algoritm
 */


var compute = function(mathOperation) {

  var valueStack = [];
  var operatorStack = [];
  var valueStackCount = 0;
  var operStackCount = 0;

  var str = mathOperation.replace(/ /g, '');

  var charArr = str.split('');

  charArr.forEach(function(char) {
    var number, oper1, oper2, result, index;

    if (char !== '(') {

      // if it's a number
      if (char.match(/^[0-9]+$/)) {
        if (char % 1 === 0) { number = parseInt(char) }
        if (char % 1 !== 0) { number = parseFloat(char) }
        valueStack.push(number);
        valueStackCount++;
      }

      // if it's not a letter or number
      if (!char.match(/^[0-9a-zA-Z]+$/) && char !== ')') {
        operatorStack.push(char);
        operStackCount++;
      }

      if (char === ')') {
        index = valueStackCount - 2;

        if (valueStackCount > 1) {
          oper1 = valueStack[valueStackCount - 1];
          oper2 = valueStack[index];
          result = eval(oper2 + operatorStack[operStackCount - 1] + oper1);

          // remove last two operations
          valueStack.splice(index, 2);
          valueStack.push(result);
          valueStackCount--;

          operatorStack.splice(1, 1);
          operStackCount--;
        }

      }

    }

  });


  return valueStack[0];
};

describe('Should test Dijkstra\'s two stack algoritm', function() {

  it('computes', function() {
    var operation = '( 1 + ( ( 2 + 3 ) * ( 4 * 5 ) ) )';
    expect(compute(operation)).toEqual(101);
  });

});
