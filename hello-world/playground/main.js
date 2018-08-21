var arrow = function (message) {
    console.log(message);
};
//defining an interface - Interface are only for declaration, the cannot be used for an implementation.
// Cohesion - Things that are related should be part on one unit.
// first letter should be capital in interface
var Point = /** @class */ (function () {
    function Point() {
        this.x = 5;
        this.y = 7;
    }
    Point.prototype.draw = function () {
        //...
        console.log('X: ' + this.x + ', Y: ' + this.y);
    };
    Point.prototype.getDistance = function (another) {
        //...
    };
    return Point;
}());
var point = new Point();
point.draw();
