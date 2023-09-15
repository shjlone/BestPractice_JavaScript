
class CCar {
  engine: string;

  constructor(engine: string) {
    this.engine = engine;
  }

  disp(): void {
    console.log("发动机： " + this.engine);
  }
}

var car1 = new CCar("BMW");
console.log(car1.engine);
car1.disp();




class SShape {
  protected Area: number;

  //静态变量
  static count: string;

  constructor(a: number) {
    this.Area = a;
  }

  //public默认访问控制符
  public disp(): void {
    console.log("矩形的面积：" + this.Area);
  }

}

class CCircle extends SShape {
  disp(): void {
    super.disp();//调用父类方法
    console.log("圆的面积：" + this.Area);
  }
}

var circle = new CCircle(10);
circle.disp();

var isShape = circle instanceof SShape;
console.log("circle 对象是Shape实例？ " + isShape);



class Animal {
  private name;
  public constructor(theName: string) { this.name = theName; }

  getName(): string {
    return this.name;
  }
}

let a = new Animal("Jack");
console.log(a.getName()); // Jack

//抽象类
abstract class Animal1 {
  public name;
  public constructor(name) {
    this.name = name;
  }
  public abstract sayHi();
}



interface Alarm {
  alert(): void;
}

//接口继承
interface LightableAlarm extends Alarm {
  lightOn(): void;
  lightOff(): void;
}

class Door {
}

//类继承 接口实现
class SecurityDoor extends Door implements Alarm {
  alert() {
      console.log('SecurityDoor alert');
  }
}

class Cars implements Alarm {
  alert() {
      console.log('Car alert');
  }
}
