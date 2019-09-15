'use strict';

function countSameElements(collection) {
  var sameElements = [];
  collection.forEach(element => {
    let splitElement = separateElement(element);
    let elementExists = sameElements.find(a => splitElement.name === a.name);
  
    if (elementExists) {
      elementExists.summary += splitElement.summary;
   } else{
    sameElements.push(splitElement); 
   }
  });

  function separateElement(element){  
    let lmnt = element;
    let cnt = 1;
    if (element.includes("-")){
      var splt = element.split("-");
      lmnt = splt[0];
      cnt = splt[1];
    } else if (element.includes(":")) {
      var splt = element.split(":");
      lmnt = splt[0];
      cnt = splt[1];
    } else if (element.includes("[")) {
      var splt = element.split("[");
      lmnt = splt[0];
      cnt = splt[1];
    } else if (element.includes("]")) {
      var splt = element.split("]");
      lmnt = splt[0];
      cnt = splt[1];
    }
 return({ name: lmnt, summary: parseInt(cnt) });
  }
  return sameElements;
}
