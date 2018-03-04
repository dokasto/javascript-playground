/**
 * Search Symetrical nodes
 * 
 * Given 2 identical DOM trees (but not equal) 
 * and one element of the first DOM tree, 
 * how would you find this element in the second DOM tree?  
 */

(function(firstDOMTree, secondDOMree, firstDOMNode) {
	/**
	 * Get the path to a node
	 * @param {*} root 
	 * @param {*} node 
	 */
	function getPath(root, node) {
		let currentElement = node;
		let path = [];

		while (currentElement && currentElement.parentNode && currentElement !== currentElement.parentNode) {
			let position = getPosition(currentElement, currentElement.parentNode);
			path.push(position);
			currentElement = currentElement.parentNode;
		}

		return path;
	}

	/**
	 * Get a node by path
	 * @param {*} path 
	 * @param {*} root 
	 */
	function getNodeByPath(path, root) {
		let limit = path.length - 1;
		let element = root;

		while (limit > -1) {
			element = cursor.childNodes[path[limit]];
			limit--;
		}

		return element;
	}

	/**
	 * Get the position of a child node in it's parent
	 * @param {*} child 
	 * @param {*} parent 
	 */
	function getPosition(child, parent) {
		let position;
		parent.childNodes.forEach((node, index) => {
			if (node.isSameNode(child)) {
				position = index;
			}
		});
		return position;
	}

	const nodePath = getPath(firstDOMTree, firstDOMNode);
	const identicalElement = getNodeByPath(nodePath, secondDOMree);

	return identicalElement;
})(firstDOMTree, secondDOMree, firstDOMNode);
