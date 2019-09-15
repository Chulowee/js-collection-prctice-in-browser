'use strict';

function createUpdatedCollection(collectionA, objectB) {
  collectionA.forEach(element => {
    if (objectB.value.includes(element.key)) {
     if (element.count/3)
      element.count -= parseInt(element.count/3);
    }
  });
  return collectionA;
}
