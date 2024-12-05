"use strict";

//let v=[["a", "b", "c"], ["d", "e", "f"], ["g", "h", "i"]];
let v = [
  [1, -1, 3],
  [-2, 5, 0],
  [10, -2, -7],
];

console.log("<html>");
console.log("<body>");

console.log("<table style='border: solid 1px #000000'>");
for (let i = v.length - 1; i >= 0; i--) {
  let cadena = "<tr>";
  for (let j = v[i].length - 1; j >= 0; j--) {
    cadena =
      cadena + "<td style='border: solid 1px #000000'>" + v[i][j] + "</td>";
  }
  cadena = cadena + "</tr>";
  console.log(cadena);
}

console.log("</table>");
console.log("</body>");
console.log("</html>");
