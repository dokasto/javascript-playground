class Trie {
  
  constructor(letter=null, terminating=false) {
    this.letter = letter;
    this.terminating = terminating;
    this.children = {};
  }
  
  fill(...words) {
    words.forEach(word => this.addWord(word));
  }
  
  addWord(word) {
    if(!word) return word;
    if(this.letter === word[0]) this.addLetters(word.substr(1));
    this.addLetters(word);
    return this;
  }
  
  isValid(word) {
    const letters = word.split('');
    let current = this;
    while(letters.length > 0) {
      const char = letters.shift();
      if(current.children[char]) {
        current = current.children[char];
      } else {
        return false;
      }
    }
    return current.terminating;
  }
  
  read(prefix) {
    const letters = prefix.split('');
    let current = this;
    
    while(letters.length > 0) {
      const letter = letters.shift();
      if(current.children[letter]) {
        current = current.children[letter];
      } else {
        return null;
      }
    }
    
    return Array.from(this.words(current)).map(each => `${prefix.slice(0, -1)}${each}`);
  }
  
  words(currentNode = this) {
    const wordsFound = new Set();
    
    const depthFirstSearch = (node, letters=[]) => {
      const lettersFound = [].concat(letters);

      if(node.letter) {
        lettersFound.push(node.letter);
        if(node.terminating) {
          wordsFound.add(lettersFound.join(''));
        }
      }

      for(let child in node.children) {
        depthFirstSearch(node.children[child], lettersFound);
      }
    };
    
    depthFirstSearch(currentNode);
    
    return wordsFound;
  }
  
  addLetters(word) {
    if(word.length < 1) return word;
    
    const firstLetter = word[0];
    const remaining = word.substr(1);
    const terminating = word.length === 1;
  
    if(this.children[firstLetter]) {
      this.children[firstLetter].addLetters(remaining);
    } else {
      this.children[firstLetter] = new Trie(firstLetter, terminating);
      this.children[firstLetter].addLetters(remaining);
    }
  }
  
}
