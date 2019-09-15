'use strict';

function collectSameElements(collectionA, objectB) {
  var sameElements =[];

  collectionA.forEach(element => {
    if(objectB.value.includes(element)){
     sameElements.push(element);}
  });
  
  return sameElements;
}
