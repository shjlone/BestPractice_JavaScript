"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal1 = exports.sayHi = exports.age = exports.Directions = exports.Animal = exports.getName = exports.name = void 0;
exports.default = MyDirections;
exports.name = 'TypeScript';
function getName() {
    return 'TypeScript';
}
exports.getName = getName;
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.sayHi = function () {
        return "My name is ".concat(this.name);
    };
    return Animal;
}());
exports.Animal = Animal;
var Directions;
(function (Directions) {
    Directions[Directions["Up"] = 0] = "Up";
    Directions[Directions["Down"] = 1] = "Down";
    Directions[Directions["Left"] = 2] = "Left";
    Directions[Directions["Right"] = 3] = "Right";
})(Directions || (exports.Directions = Directions = {}));
exports.age = age = 20;
