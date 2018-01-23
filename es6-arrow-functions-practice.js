// What do these evaluate to and what are the reasons why?

((name) => {})()

((name) => 'Hi ' + name)('Jess')

((name) => {'Hi ' + name})('Jess')

((name) => {return 'Hi ' + name})('Jess')

((name) => {id: name})('Jess')

((name) => ({id: name}))('Jess')

((name) => {return {id: name}})('Jess')

let func1 = (x, y)
=> {
  return x + y;
};

let func6 = (
  x,
  y
) => {
	return x + y;
};

const func = (state) => ({
  hidden: 'hidden',
  auth: 'auth',
});

const func2 = (state) => (2 +
  3);

const func3 = (state) => 2
  + 3 +
  1;


var bark = () => 'bark!';
var woof = () => 'woof!';

var barkAndWoof = () => (
  bark();
  woof();
);

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

// if you swap an arrow function for the anonymous function above
// why does it work correctly?

bunny.showTasks();
