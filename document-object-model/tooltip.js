/**
 * Implement Tooltip for n nodes
 */

const $elem = function(node) {
  let prefix = node.substr(0, 1);
  var elem = document.querySelector(node);

  if (elem !== null && prefix === '.') { // if it's a class
    elem = elem[0];
  }

  return {
    tooltip: function(options) {
      if (elem !== null) {
        let title = options.content || 'no title';
        elem.setAttribute('title', title);
      }
    }
  }
};
