function permute(string) {
	return permuteArray(string.split(''));
}

function permuteArray(array) {
	switch (array.length) {
		case 0:
			return [];
		case 1:
			return array;
		default:
			return flatten(array.map(a => permuteArray(without(array, a)).map(b => a.concat(b))));
	}
}

function flatten(array) {
	return array.reduce((a, b) => a.concat(b), []);
}

function without(array, a) {
	const bs = array.slice(0);
	bs.splice(array.indexOf(a), 1);
	return bs;
}

describe('String permutations', () => {
	it(`permute('abc') should be  ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']`, () => {
		expect(permute('abc')).toEqual(['abc', 'acb', 'bac', 'bca', 'cab', 'cba']);
	});
});
