'use strict';

function createUpdatedCollection(collectionA, objectB) {
  let collectionC =[];

  collectionA.forEach(element => {
    let splitElement = separateElement(element);
    let elementExists = collectionC.find(a => splitElement.key === a.key);
    if (elementExists) {
      elementExists.count++;
   } else {
    collectionC.push(separateElement(element)); }
  });

  collectionC.forEach(elements => {
    if (objectB.value.includes(elements.key)) {
         if (elements.count/3){
          elements.count -= parseInt(elements.count/3);
         }
    }
});
  
function separateElement(element){  
  let lmnt = element;
  let cnt = 1;
  if (element.includes("-")){
    var splt = element.split("-");
    lmnt = splt[0];
    cnt = splt[1];
  } 
return({ key: lmnt, count: parseInt(cnt) });
}

  return collectionC;
}
