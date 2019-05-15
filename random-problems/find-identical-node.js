/**
 * Given two identical DOM trees (not the same one), 
 * and a node from one of them find the node in the other one.  
 */

const findIdentical = (nodeA, treeA, treeB) => {
	// get path to NodeA by navigating up the tree
	const pathToNodeA = [];
	let currentNode = nodeA;
	while(currentNode) {
		const parent = currentNode.parent;
		const index = parent.indexOf(currentNode);
		pathToNodeA.push(index);
		currentNode = parent;
	}

	// now that we have the path we can search for the identical node
	let identicalNodeInB = treeB;
	while(pathToNodeA) {
		const index = pathToNodeA.pop();
		identicalNodeInB = identicalNodeInB.childNodes[index];
	}

	return identicalNodeInB;
};