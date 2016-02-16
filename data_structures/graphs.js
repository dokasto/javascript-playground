/**
 * Graph Implementation
 */

/**
 * Vertex Class
 * @param {string} label name of the vertex
 */
function Vertex(label) {
  this.label = label;
}

/**
 * Graph Class
 * @param {Vertex} v vertext object
 */
function Graph(v) {
  this.vertices = v;
  this.edges = 0;
  this.adj = [];
  this.marked = [];
  for (var i = 0; i < this.vertices; i++) {
    this.adj[i] = [];
    this.adj[i].push("");
    this.marked[i] = false;
  }
}

/**
 * Add Edge
 * @param {Vertex} a
 * @param {Vertex} b
 */
Graph.prototype.addEdge = function(a, b) {
  this.adj[a].push(b);
  this.adj[b].push(a);
  this.edges++;
};

/**
 * displays the graph by showing a list of
 * all vertices and the vertices that are adjacent to them
 */
Graph.prototype.show = function() {
  for (var i = 0; i < this.vertices; i++) {
    console.log(i + ' -> ');
    for (var j = 0; j < this.vertices; j++) {
      if (this.adj[i][j] !== undefined) {
        console.log(this.adj[i][j] + ' ');
      }
    }
  }
};


/**
 * Depth First Search Algorithm
 * @param  {Object} v
 */
Graph.prototype.dfs = function(v) {
  this.marked[v] = true;
  if (this.adj[v] !== undefined) {
    console.log('Visited vertex ' + v);
  }
  for (var w in this.adj[v]) {
    if (!this.marked[w]) {
      this.dfs(w);
    }
  }
};

/**
 * Tests
 */
var g = new Graph(5);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(2, 4);
g.show();
