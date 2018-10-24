/**
 * Print N lines of a pascal triangle
 * C = C * (line - i) / i
 */
const pascalsTriangle = N => {
	const lines = [];
	for(let line=1; line<=N; line++) {
		let column = 1;
		const columns = [column];
		for(let i=1; i<=N; i++) {
			column = column * (line - i) / i;
			if(column > 0) columns.push(column);
		}
		lines.push(columns);
	}
	return lines;
};

