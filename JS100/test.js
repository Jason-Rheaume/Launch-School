let vocabulary = [
  ['happy', 'cheerful', 'merry', 'glad'],
  ['tired', 'sleepy', 'fatigued', 'drained'],
  ['excited', 'eager', 'enthused', 'animated']
];

let vocabularyIdx = 0;


while (vocabularyIdx < vocabulary.length) {
  let synonyms = vocabulary[vocabularyIdx];
  let synonymIdx = 0;
  vocabularyIdx++;
  
  
  while (synonymIdx < synonyms.length) {
    console.log(synonyms[synonymIdx]);
    synonymIdx++;
  }
}