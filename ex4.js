const firstDiv = document.querySelector(".one");
const secondDiv = document.querySelector(".two");
const tamp = firstDiv.innerHTML;
firstDiv.innerHTML =secondDiv.innerHTML;
secondDiv.innerHTML = tamp;
alltemp =firstDiv
firstDiv = secondDiv;
secondDiv = alltemp;



