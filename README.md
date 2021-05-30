# Graph Search

This is a js practice for graph search algorithms, breadth-first search and depth-first search.

Clone this repo and take a look:

```node
npm i && npm start
```

## Data

Sample data is a list of airports in Kenya:

`NBO MSA NAK ELD KSM NYR NYK LOD MAL KIL KTL`

Their hypothetical routes:

```json
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
```

## Graph Nodes

To create nodes, we append the airport short names to an empty map. Then, for each route, we fetch the origin from the mapped list and append the destination of the point index.
