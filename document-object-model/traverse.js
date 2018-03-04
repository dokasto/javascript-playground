'use strict';

/**
 * DOM Traversal functions
 */


/**
 * List all text nodes in an arbitrary DOM node
 */
var listTextNodes = function(node) {
  var textNodes = [];

  function traverse(node) {
    if (node.nodeType === 3) {
      textNodes.push(node);
    }
    if (node.childNodes !== null) {
      node.childNodes.forEach(function(child) {
        traverse(child);
      });
    }
  };
  traverse(node);
  return textNodes;
};

/**
 * Build a table
 * @param  {int} rows
 * @param  {int} cols
 * @return {DOM Node}
 */
var buildTable = function(rows, cols) {

  let td = function(text) {
    let col = document.createElement('td');
    let txtNode = document.createTextNode(text);
    col.appendChild(txtNode);
    return col;
  };

  let table = document.createElement('table');

  for (let i = 0; i < rows; i++) {
    let row = document.createElement('tr');
    for (let j = 0; j < cols; j++) {
      let col = td(`${i} ${j}`);
      row.appendChild(col);
    }
    table.appendChild(row);
  }

  return table;
};
