const chalk = require('chalk');
const log = console.log;

const airports = 'NBO MSA NAK ELD KSM NYR NYK LOD MAL KIL KTL'.split(' ');

const routes = [
  ['NBO', 'MSA'],
  ['NBO','ELD'],
  ['NBO','KSM'],
  ['MSA', 'MAL'],
  ['MSA', 'KIL'],
  ['KSM', 'ELD'],
  ['KSM', 'KTL'],
  ['KTL', 'NYR'],
  ['NYK', 'NYR'],
  ['NYR', 'MSA'],
  ['KTL', 'LOD'],
  ['LOD', 'ELD'],
]

// create ze graph
const adjacencyList = new Map();

// create nodes
function addNodes(airport){
  adjacencyList.set(airport, []);
}

// Add edge
function addEdge(origin, destination){
  adjacencyList.get(origin).push(destination);
  adjacencyList.get(destination).push(origin);
}

// Graph it
airports.forEach(addNodes);
routes.forEach(route => addEdge(...route));

console.table(adjacencyList);

// breadth-first search
function bfs(start){
  const queue = [start];
  const visited = new Set();

  while (queue.length > 0){

    const airport = queue.shift();
    const destinations = adjacencyList.get(airport);
    for (const destination of destinations){
      if (destination === 'LOD'){
        log(chalk.green(destination + ' Found Lodwar'));
      }
      
      if(!visited.has(destination)){
        visited.add(destination);
        queue.push(destination);
        console.log(destination);
      }
    }
  }
};
console.time(chalk.rgb(0,0,0).bgYellow.bold('Breadth-first Search'));
bfs('NBO');
console.timeEnd(chalk.rgb(0,0,0).bgYellow.bold('Breadth-first Search'));

// depth first search
let steps = 0;
function dfs(start, visited = new Set()){
  console.log(start);
  visited.add(start);
  
  steps++;
  const destinations = adjacencyList.get(start);
  for (const destination of destinations){
    if (destination === 'LOD'){
      log(chalk.green(`Found Lodwar in ${steps} steps`));
      return;
    }
    if (!visited.has(destination)){
      dfs(destination, visited);
    }
  }
}
console.time(chalk.rgb(0,0,0).bgYellow.bold('Depth-first Search'))
dfs('NBO');
console.timeEnd(chalk.rgb(0,0,0).bgYellow.bold('Depth-first Search'))