'use strict';
'use restrict';

var UF = function(N) {
  this.parent = []; // parent of i
  this.rank = []; // rank of subtree rooted at i (never more than 31)
  this.count = 0; // number of components

  if (typeof N === 'number' && parseInt(N) > 0) {
    this.count = N;

    for (var i = 0; i < N; i++) {
      this.parent[i] = i;
      this.rank[i] = 0;
    }

  } else {
    throw new Error("Illegal argument");
  }
};

/**
 * Add connection between p and q
 * @param  {int} p
 * @param  {int} q
 */
UF.prototype.union = function(p, q) {};

/**
 * Component identifier for p
 * @param  {int} p
 * @return {int}
 */
UF.prototype.find = function(p) {};

/**
 * Check if p and q are connected
 * in the same component
 * @param  {int} p
 * @param  {int} q
 * @return {boolean}
 */
UF.prototype.connected = function(p, q) {};

/**
 * Number of components
 * @return {int}
 */
UF.prototype.count = function() {};
