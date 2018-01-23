// returns: undefined
// explanation: an empty block with an implicit return
((name) => {})()

// returns: 'Hi Jess'
// explanation: no block means implicit return
((name) => 'Hi ' + name)('Jess')

// returns: undefined
// explanation: explicit return required inside block, but is missing.
((name) => {'Hi ' + name})('Jess')

// returns: 'Hi Jess'
// explanation: explicit return in block exists
((name) => {return 'Hi ' + name})('Jess')

// returns: undefined
// explanation: a block containing a single label. No explicit return.
// more: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label
((name) => {id: name})('Jess')

// returns: {id: 'Jess'}
// explanation: implicit return of expression ( ) which evaluates to an object
((name) => ({id: name}))('Jess')

// returns: {id: 'Jess'}
// explanation: explicit return inside block returns object
((name) => {return {id: name}})('Jess')

// Line breaks are not allowed and will throw a syntax error
let func1 = (x, y)
=> {
  return x + y;
}; // SyntaxError

// But line breaks inside of a parameter definition is ok
let func6 = (
  x,
  y
) => {
	return x + y;
}; // Works!

// returns: {hidden: 'hidden', auth: 'auth'}
// Even though the expression is written across multiple lines,
// it still returns, because the inside of the parentheses is evaluated
// as a single expression
const func = (state) => ({
  hidden: 'hidden',
  auth: 'auth',
});

// returns: 5
// And line breaks across multiple lines are okay
const func2 = (state) => (2 +
  3);

// returns 6
const func3 = (state) => 2
  + 3 +
  1;

// returns: 'bark!'
var bark = () => 'bark!';
// returns: 'woof!'
var woof = () => 'woof!';

// returns: Unexpected token ;
// () evaluates as an expression, so semicolons aren't allowed
var barkAndWoof = () => (
  bark();
  woof();
);

// returns: 'woof!'
// it's a valid control flow expression, starting with
// 'bark!' evaluating to true, and 'woof!' evaluating to true
// and returning
var barkAndWoof2 = () => (
  bark() && woof()
);


var bunny = {
  name: 'Usagi',
  tasks: ['transform', 'eat cake', 'blow kisses'],
  showTasks: function() {
    this.tasks.forEach(function(task) {
      alert(this.name + " wants to " + task);
    });
  }
};

bunny.showTasks();
// [object Window] wants to transform
// [object Window] wants to eat cake
// [object Window] wants to blow kisses
