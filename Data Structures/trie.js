/**
 * Trie implementations
 */

function Trie() {

  let mainTrie = {};
  let words = '';

  function addWord(word) {
    let trie = {};
    let count = 0;
    let prefixes = {};

    function _addWord(word, trieObj) {
      count++;
      let letter = word.charAt(0);
      if (letter) {
        if (count === 1) {
          trie = trieObj;
        }

        if (prefixes.hasOwnProperty(letter)) {
          trieObj = prefixes[letter];
        } else {
          trieObj[letter] = {};
          prefixes[letter] = trieObj;
        }

        let remain = word.substring(1);
        if (remain.length === 0) {} else {
          _addWord(remain, trieObj[letter]);
        }
      }
    };

    _addWord(word, {});
    return trie;
  };

  for (let i = 0; i < arguments.length; i++) {
    words += arguments[i];
  }

  mainTrie = addWord(words);

  /**
   * Return the trie
   * @return {[type]} [description]
   */
  this.getTrie = function() {
    return mainTrie;
  };

  /**
   * 3(a)
   * question: Write another function that accepts a string and returns either the unique value
   * for a corresponding branch, or undefined if there was no match
   */
  this.getBranch = function(str) {
    return addWord(str);
  };

};
