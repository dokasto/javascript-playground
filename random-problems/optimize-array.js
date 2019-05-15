/**
 Source: Glassdoor

Given input:
// could be potentially more than 3 keys in the object above
items = [
{color: 'red', type: 'tv', age: 18},
{color: 'silver', type: 'phone', age: 20}
...
]

excludes = [
{k: 'color', v: 'silver'},
{k: 'type', v: 'tv'},
....
]

function excludeItems(items, excludes) {
   excludes.forEach(pair => {
      items = items.filter(item => item[pair.k] === item[pair.v]);
   });
   return items;
}

1. Describe what this function is doing...
2. What is wrong with that function ?
3. How would you optimize it ?  

current time complexity: O(excludes) * O(items)
 */
