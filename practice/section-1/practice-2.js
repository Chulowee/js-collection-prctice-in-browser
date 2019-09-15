'use strict';

function collectSameElements(collectionA, collectionB) {
  var sameElements =[];
  
  collectionA.forEach(element => {
    if(collectionB[0].includes(element)){
     sameElements.push(element);}
  });
  
  return sameElements;
}
