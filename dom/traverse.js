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
