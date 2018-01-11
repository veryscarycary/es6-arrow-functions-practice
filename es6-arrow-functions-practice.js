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
