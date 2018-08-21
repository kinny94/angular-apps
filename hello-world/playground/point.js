"use strict";
//defining an interface - Interface are only for declaration, the cannot be used for an implementation.
// Cohesion - Things that are related should be part on one unit.
// first letter should be capital in interface
Object.defineProperty(exports, "__esModule", { value: true });
var Point = /** @class */ (function () {
    // multiple constructor are not supported in typescript.
    function Point(x, y) {
        this.x = x;
        this.y = y;
    } //prefix will generate and initialize this field
    Point.prototype.draw = function () {
        //...
        console.log('X: ' + this.x + ', Y: ' + this.y);
    };
    Point.prototype.getDistance = function (another) {
        //...
    };
    Point.prototype.getX = function () {
        return this.x;
    };
    Point.prototype.setX = function (value) {
        if (value < 0) {
            throw new Error("Value cannot be less than 0");
        }
        this.x = value;
    };
    Object.defineProperty(Point.prototype, "X", {
        // how setters and getters work in typescript
        get: function () {
            return this.x;
        },
        set: function (value) {
            if (value < 0) {
                throw new Error("Value cannot be less than 0");
            }
            this.x = value;
        },
        enumerable: true,
        configurable: true
    });
    return Point;
}());
exports.Point = Point;
