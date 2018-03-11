/**
 * Knapsack problem
 */
// assume Weight = [];
// assume value = [];
const KS = (index, totalWeight) => {
	if (index === 0 || totalWeight === 0) return 0;
	if(weight[index] > totalWeight) {
		return KS(index - 1, totalWeight);
	} else {
		const included = KS(index - 1, totalWeight);
		const notIncluded = value[index] + KS(index - 1, totalWeight - weight[index]);
		return Math.max(included, notIncluded);
	}
};