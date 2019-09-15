'use strict';

function countSameElements(collection) {
  var sameElements = [];
  collection.forEach(element => {
    var split = element.includes("-");
    let elementExists = sameElements.find(coll => coll.key == element);
    if (elementExists) {
      elementExists.count++;
   } else if(!split){
    sameElements.push({ key: element, count: 1 }); 
   }else{
      var splt = element.split("-");
      var lmnt = splt[0];
      var cnt = splt[1];
      sameElements.push({ key: lmnt, count: parseInt(cnt) });
     }
  
  });
  
  return sameElements;
}
