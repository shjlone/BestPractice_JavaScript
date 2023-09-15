
function testObject40() {
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


  var invoke = function (obj: { key1: string, key2: Function, key3: Array<String> }) {
    console.log(obj.key1, obj.key3);
  };

  invoke(obj1);

}
testObject40();


namespace Drawing {
  export interface IShape {
    draw();
  }
}

namespace Drawing {
  export class Circle implements IShape {
    draw() {
      console.log("Circle is drawn");
    }
  }
}

function drawAllShapes2(shape: Drawing.IShape) {
  shape.draw();
}


drawAllShapes2(new Drawing.Circle());