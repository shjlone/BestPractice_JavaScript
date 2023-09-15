var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var Car = /** @class */ (function () {
    function Car(engine) {
        this.engine = engine;
    }
    Car.prototype.disp = function () {
        console.log("发动机： " + this.engine);
    };
    return Car;
}());
var car1 = new CCar("BMW");
console.log(car1.engine);
car1.disp();
var Shape = /** @class */ (function () {
    function Shape(a) {
        this.Area = a;
    }
    //public默认访问控制符
    Shape.prototype.disp = function () {
        console.log("矩形的面积：" + this.Area);
    };
    return Shape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Circle.prototype.disp = function () {
        _super.prototype.disp.call(this); //调用父类方法
        console.log("圆的面积：" + this.Area);
    };
    return Circle;
}(SShape));
var circle = new CCircle(10);
circle.disp();
var isShape = circle instanceof SShape;
console.log("circle 对象是Shape实例？ " + isShape);
function testObject4() {
    var obj1 = {
        key1: "value1",
        key2: function () { },
        key3: ["content1", "content2"]
    };
    console.log(obj1.key1);
    //类型模版
    obj1.key2 = function () {
        return "hi";
    };
    console.log(obj1.key2());
    var invoke = function (obj) {
        console.log(obj.key1, obj.key3);
    };
    invoke(obj1);
}
testObject4();
var Drawing;
(function (Drawing) {
    var Circle = /** @class */ (function () {
        function Circle() {
        }
        Circle.prototype.draw = function () {
            console.log("Circle is drawn");
        };
        return Circle;
    }());
    Drawing.Circle = Circle;
})(Drawing || (Drawing = {}));
function drawAllShapes(shape) {
    shape.draw();
}
drawAllShapes(new Drawing.Circle());
