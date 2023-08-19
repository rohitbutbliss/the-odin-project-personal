let redPara = document.createElement("p");
redPara.style.color = "red";
redPara.textContent = "Hey I'm red";

let blueHeading = document.createElement("h3");
blueHeading.textContent = "I'm a blue h3!";
blueHeading.style.color = "blue";

document.body.appendChild(redPara);
document.body.appendChild(blueHeading);

let pinkDiv = document.createElement("div");
pinkDiv.style.cssText = "border: 1px solid black; background-color: pink;";

let headingInsideDiv = document.createElement("h1");
headingInsideDiv.textContent = "I'am in a div";

let paraInsideDiv = document.createElement("p");
paraInsideDiv.textContent = "ME TOO!";

pinkDiv.appendChild(headingInsideDiv);
pinkDiv.appendChild(paraInsideDiv);

document.body.appendChild(pinkDiv);