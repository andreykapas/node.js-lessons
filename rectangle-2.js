/**
 * Created by andrey on 17.4.16.
 */

module.exports = function(x, y, callback){
    "use strict";
    try {
        if (x < 0 || y < 0){
            throw new Error("Rectangle dimensions should be greater than zero: l = "
                + x + ", and b = " + y);
        } else {
            callback(null, {
                perimeter: () => 2 * (x + y),
                area: () => x * y
            });
        }
    } catch (error){
        callback(error, null);
    }
}