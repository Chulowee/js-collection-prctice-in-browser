'use strict';

function collectSameElements(collectionA, objectB) {
  var sameElements =[];

  collectionA.forEach(element => {
    if (objectB.value.includes(element.key)) {
      sameElements.push(element.key);
    }
});

  
  return sameElements;
}
