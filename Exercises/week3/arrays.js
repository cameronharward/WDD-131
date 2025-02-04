//  arrays.js
const steps = ["one", "two", "three"];
function listTemplate(step) {
  return `<li>${step}</li>`;
}

const stepsHtml = steps.map(listTemplate);
document.querySelector("#myList").innerHTML = stepsHtml.join("");

const letters = ["A", "B", "C"];

function gpaConverter(letter){
  if(letter == "A"){
    return 4;
  }
  else if (letter == "B"){
    return 3;
  }
  else{
    return 2;
  }
}

const gpaHtml = letters.map(gpaConverter);
document.querySelector("#myList").innerHTML = gpaHtml.join("");