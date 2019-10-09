'use strict';

function countSameElements(collection) {
   const uniqueLetters = Array.from(new Set(collection));

  return uniqueLetters
    .map(uniqueLetter=>({key: uniqueLetter, count: count(uniqueLetter, collection)}));
}

function count(uniqueLetter, collection){
  return collection
    .filter(element=>element===uniqueLetter)
    .length;
}
