Insider Stock Trading
Suppose that you are given a list of `n` integers. These integers represent the stock price of ABC CORP on a given day. Determine the maximum profit you can obtain with a single transaction. 
Note: You must sell the stock after buying it.


Examples:
Input: [3, 8, 1(BUY), 5, 2, 15(SELL)]
Output: 14
Input: [3(BUY), 8, 15(SELL), 1, 5, 2]
Output: 12

Const profit = (prices) => {
Const max = Math.max(prices);
Const salesProfits = [];
	
	prices.forEach((price, index) => {
		if(price !== max) {
			salesProfits[i] = max - price;
	};
});

Return Math.max(salesProfits);
};
Course Prerequisites
We are given a list of 1...N courses that students need to take and and a list of prerequisite course pairs. For a prerequisite pair [x,y], students need to take course y before taking course x.
Given the total courses and a list of prerequisite pairs, can a student finish all courses?


Input: 2, [[1, 0]] Course 0 depends on Course 1. 
                   Course 1 depends on nothing
Output: True

Input:  3 [[1, 0], // Course 0 requires Course 1
           [2, 1], // Course 1 requires Course 2
           [0, 1]] // Course 1 requires Course 0
Output: False

Input: 4, [[0, 2], // Course 2 requires Course 0
           [0, 1]] // Course 1 requires Course 0
Output: True


Const canFinish = (courses) => {
	Const uniqueCourses = [];
	Const requirements = {};

	courses.forEach((course) => {
		if(!uniqueCourses[course[1]]) {
			uniqueCourses.push(course[1]);
			if(requirements[course[0]]) {
				requirements[course[0].push(course[1]);
} else {
	requirements[course[0] = [];
requirements[course[0].push(course[1]);
}
			
}
});




Const noRequirements = uniqueCourses.map(course => !requirements[course]);

let canAllBeTaken = true;

for(let key in requirements) {
	Const childCourses = requirements[key];
	childCourses.each((item) => {

		Let canTake = noRequirements.indexOf(item) !== -1;

		if(!canTake) canAllBeTaken = false;
		
});
}

return canAllBeTaken;
};

Course0 requires Course1
Course1 requires Course2
Course2 requires Course3







