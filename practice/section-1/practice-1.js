'use strict';

function collectSameElements(collectionA, collectionB) {
  var sameElements =[];

  collectionA.forEach(element => {
    if(collectionB.includes(element)){
     sameElements.push(element);}
  });  
  
  return sameElements;
}
