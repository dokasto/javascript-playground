const aSentence = 'heysiriwanticecream';
const aWords = ['hey','siri', 'i', 'want','icecream'];

const spaceSentence = (words, sentence) => {
  const sentenceArray = sentence.split('');

  words.forEach(word => {
    const wordLength = word.length;

    for(let i=0; i<sentenceArray.length; i++) {
      const slicedWord = sentenceArray.slice(i, wordLength + i).join('');
      
      if (slicedWord === word) {
       sentenceArray.splice(wordLength, 0, ' ');
      }
    }
    
  });
  
  return sentenceArray.join('');
};


console.log(spaceSentence(aWords, aSentence));
