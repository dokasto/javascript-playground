class TrieNode {
  
  constructor(word, terminating = false) {
    const chars = word.split('');
    this.letter = chars[0];
    this.children = [];
    this.terminating = terminating;
    
    if (chars.length > 1) {
      this.addAlphabet(chars.splice(1), true);
    }
    
  }
  
  addAlphabet(letters, isInitial = false) {
    const letter = letters[0];
    
    if (letters.length === 1) {
      this.children.push(new TrieNode(letter, true));
    } else if (letters.length > 1) {
      if (isInitial) {
        this.children.push(new TrieNode(letter));
        this.children[0].addAlphabet(letters.splice(1), isInitial);
      } else {
        let exists = this.exists(letter);
        if (exists === -1) {
          this.children.push(new TrieNode(letter));
          this.children[this.children.length - 1].addAlphabet(letters.splice(1), isInitial);
        } else {
          this.children[exists].addAlphabet(letters.splice(1), isInitial);
        }
      }
    }
  }
  
  
  exists(letter) {
   let exists = -1;
    this.children.forEach((child, index) => {
      if (child.letter === letter) exists = index;
    });
    return exists;
  }
  
  
  addWord(word) {
    const letters = word.split('');
    this.addAlphabet(letters[0] === this.letter ? letters.splice(1): letters);
  }
  
}


const trie = new TrieNode('beer');
trie.addWord('bear');
trie.addWord('bat');

console.log('%j', trie);