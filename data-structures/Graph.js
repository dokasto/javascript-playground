
class Graph {

	constructor() {
		this.nodes = {};
	}

	addNode(value, ...rest) {
		this.nodes[value] = this.nodes[value] || [];
		if (rest.length) this.addNode(...rest);
	}

	addEdge(v1, v2) {
		if (!this.nodes[v1] || !this.nodes[v2]) return;
		this.nodes[v1].push(v2);
		this.nodes[v2].push(v1);
		return this;
	}

	traverseDepthFirst() {
		const visited = [];
		
		const traverse = (node) => {
			if (!this.nodes[node]) return;
			if(visited.indexOf(node) === -1) {
				visited.push(node);
				this.nodes[node].forEach((each) => {
					traverse(each);
				});
			}
		};

		for(let key in this.nodes) {
			if(visited.indexOf(key) === -1) {
				visited.push(key);
				this.nodes[key].forEach((node) => {
					traverse(node);
				});
			}
		}

		return visited;
	}

}

const graph = new Graph();

graph.addNode('olu', 'maintain', 'bola', 'sidi');

graph
	.addEdge('olu', 'sidi')
	.addEdge('olu', 'bola')
	.addEdge('bola', 'maintain');
	

graph.traverseDepthFirst();