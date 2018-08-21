"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var point_1 = require("./point");
var like_component_1 = require("./like.component");
var arrow = function (message) {
    console.log(message);
};
var point = new point_1.Point(1, 2);
var x = point.getX();
console.log(x);
point.setX(10);
x = point.getX();
console.log(x);
x = point.X;
console.log(x);
point.X = 10;
x = point.X;
console.log(x);
var component = new like_component_1.LikeComponent(10, true);
component.onClick();
console.log("likeCount: " + component.likesCount + ", isSelected: " + component.isSelected);