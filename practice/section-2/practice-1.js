'use strict';

function countSameElements(collection) {
  var sameElements= [];

  collection.forEach(element => {
    let elementExists = sameElements.find(coll => coll.key == element);
    if (elementExists) {
      elementExists.count++;
   } else {
    sameElements.push({ key: element, count: 1 }); }
  });
  
  return sameElements;
}
