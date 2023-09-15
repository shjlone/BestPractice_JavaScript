"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var export_1 = require("./export");
console.log(export_1.name);
var myName = (0, export_1.getName)();
console.log(myName);
var cat = new export_1.Animal('Tom');
var directions = [export_1.Directions.Up, export_1.Directions.Down, export_1.Directions.Left, export_1.Directions.Right];
var options = {
    data: {
        name: 'foo'
    }
};
console.log(export_1.age);
