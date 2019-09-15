'use strict';

function createUpdatedCollection(collectionA, objectB) {
  let updatedCollection = [];

  collectionA.forEach(element => {
    let cnt = element.count;
    if (objectB.value.includes(element.key)) {
      element.count--;
    }
    updatedCollection.push(element);
  });
  return updatedCollection;
}
