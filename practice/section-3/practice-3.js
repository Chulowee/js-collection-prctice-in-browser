'use strict';

function createUpdatedCollection(collectionA, objectB) {
  let collectionC =[];

  collectionA.forEach(element => {
    let elementExists = collectionC.find(coll => coll.key == element);
    if (elementExists) {
      elementExists.count++;
   } else {
    collectionC.push({ key: element, count: 1 }); }
  });

  collectionC.forEach(element => {
    if (objectB.value.includes(element.key)) {
         if (element.count/3){
          element.count -= parseInt(element.count/3);
         }
    }
});
  
  return collectionC;
}
