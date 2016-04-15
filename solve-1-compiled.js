/**
 * Created by andrey on 15.4.16.
 */

var rect = require('./rectangle-1');

function solveRect(l, b) {
    "use strict";

    console.log("Solving for rectangle with l = " + l + " and b = " + b);

    if (l < 0 || b < 0) {
        console.log("Rectangle dimensions should be greater than zero: l = " + l + ", and b = " + b);
    } else {
        console.log("The area of a rectangle of dimentions length = " + l + " and breadth = " + b + " is " + rect.area(l, b));
        console.log("The perimeter of a rectangle of dimentions length = " + l + " and breadth = " + b + " is " + rect.perimeter(l, b));
    }
}

solveRect(2, 4);
solveRect(3, 5);
solveRect(-3, 5);

//# sourceMappingURL=solve-1-compiled.js.map