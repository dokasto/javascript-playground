
const isValidBST = tree => {
	const array = [];

	function inOrderTraverse(node) {
		if (node.left) {
			inOrderTraverse(node.left);
		}
		array.push(node.value);
		if (node.right) {
			inOrderTraverse(node.right);
		}
	}

	for(i=0; i<array.length; i++) {
		if(array[i] > array[i+1]) {
			return false;
		}
	}

	return true;
};