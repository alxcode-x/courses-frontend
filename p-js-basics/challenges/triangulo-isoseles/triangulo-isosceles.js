const sideA = document.getElementById("side-a").value;
const sideB = document.getElementById("side-b").value;
const base = document.getElementById("base").value;

function getHeight(sideA, sideB, base) {
    alert((sideA === sideB) ? Math.sqrt(sideA ** 2 - ((base ** 2) / 4)) : "The sides of the isosceles triangle must be equal.");
}