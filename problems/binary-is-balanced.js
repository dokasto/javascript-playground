
const isBalanced = tree => {
	if (!tree) return true;

	const getHeight = node => {
		if (!node) return -1;
		return Math.max(getHeight(node.left), getHeight(node.right)) + 1;
	};

	const height = getHeight(node.left) - getHeight(node.right);
	if(Math.abs(height) > 1) {
		return false;
	} else {
		return isBalanced(node.left) && isBalanced(node.right);
	}
	
};